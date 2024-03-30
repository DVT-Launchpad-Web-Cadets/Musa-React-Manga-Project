import { useQuery } from "@tanstack/react-query";
import { getComicChapters } from "../../../sharedAPI.ts/apiQueries";
import { MangaDetails } from "../../../models/mangaDetails";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import { useReadStore } from "../../../state/readStore";

const ScanModal = ({ mangaInfo }: { mangaInfo: MangaDetails | null }) => {
  const setCurrentComicScans = useReadStore(
    (state) => state.setCurrentComicScans
  );

  const { isPending, data } = useQuery({
    queryKey: ["comicChapter", mangaInfo?.comic?.hid],
    queryFn: () => getComicChapters(mangaInfo?.comic?.hid),
  });

  const scans = [
    ...new Map(
      data?.chapters.map((chapter) => [
        chapter?.md_chapters_groups?.[0]?.md_groups?.title,
        chapter,
      ])
    ).values(),
  ];
  const schemaObject = Object.fromEntries(
    scans.map((field) => [
      field.md_chapters_groups?.[0]?.md_groups?.slug,
      yup.boolean(),
    ])
  );

  const schema = yup
    .object()
    .shape(schemaObject)
    .test("customTest", (obj) => {
      const someTruthy = Object.values(obj).some((field) => field === true);
      if (someTruthy) {
        return true;
      }

      return new yup.ValidationError(
        "Please select at least one scan",
        null,
        "field name"
      );
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ [key: string]: boolean }>({
    resolver: yupResolver(schema) as Resolver<{ [key: string]: boolean }>,
  });

  function setScanData(data: { [key: string]: boolean }) {
    const selectedScans = Object.keys(data)
      .filter((slug: string) => data[slug] === true)
      .map((slug) => slug);

    setCurrentComicScans(selectedScans);

    const modal = document.getElementById("my_modal_4") as HTMLDialogElement;

    if (modal) modal.close();
  }

  if (!data) {
    return <h1>There are no scans</h1>;
  }

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog" onSubmit={handleSubmit(setScanData)}>
          {errors && errors["field name"] && (
            <p className="text-sm text-error-color">
              ❗️
              {errors["field name"].message}
            </p>
          )}
          {isPending ? (
            <div className="flex justify-center items-center grow">
              <span className="loading loading-dots loading-lg text-secondary-color"></span>
            </div>
          ) : scans.length ? (
            scans
              .filter(
                (chapter) => chapter?.md_chapters_groups?.[0]?.md_groups?.slug
              )
              .map((chapter) => (
                <div
                  key={chapter.hid}
                  id="checkboxes"
                  className="flex flex-col items-start"
                >
                  <label className="label cursor-pointer flex gap-4">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-primary"
                      {...register(
                        chapter?.md_chapters_groups?.[0]?.md_groups
                          ?.slug as string
                      )}
                    />
                    <span className="label-text">
                      {chapter?.md_chapters_groups?.[0]?.md_groups?.title ??
                        "Unknown Scan"}
                    </span>
                  </label>
                </div>
              ))
          ) : (
            <h1>There are no scans</h1>
          )}
          <div id="btns" className="modal-action flex gap-5 justify-end">
            {scans.length ? (
              <input type="submit" className="btn bg-secondary-color"></input>
            ) : (
              <input type="submit" disabled className="btn"></input>
            )}
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default ScanModal;
