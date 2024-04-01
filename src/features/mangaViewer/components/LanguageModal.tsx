import { useQuery } from "@tanstack/react-query";
import { getComicChapters } from "../../../sharedAPI.ts/apiQueries";
import { MangaDetails } from "../../../models/mangaDetails";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver, useForm } from "react-hook-form";
import { useReadStore } from "../../../state/readStore";

const LanguageModal = ({
  mangaInfo,
  langRef,
}: {
  mangaInfo: MangaDetails | null;
  langRef: React.RefObject<HTMLDialogElement>;
}) => {
  const setCurrentComicLanguage = useReadStore(
    (state) => state.setCurrentComicLanguage
  );

  const { isPending, data } = useQuery({
    queryKey: ["comicChapter", mangaInfo?.comic?.hid],
    queryFn: () => getComicChapters(mangaInfo?.comic?.hid),
  });

  const lang = new Intl.DisplayNames(["en"], { type: "language" });

  const languages = [
    ...new Map(
      data?.chapters.map((chapter) => [lang.of(chapter.lang), chapter])
    ).values(),
  ];
  let schemaObject = Object.fromEntries(
    languages.map((field) => [field.lang, yup.string()])
  );

  const schema = yup.object().shape(schemaObject);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ [key: string]: string }>({
    resolver: yupResolver(schema) as Resolver<{ [key: string]: string }>,
  });

  function setLangData(data: { [key: string]: string }) {
    setCurrentComicLanguage(data.lang);

    langRef.current?.close();
  }

  return (
    <dialog id="lang_modal" className="modal" ref={langRef}>
      <div className="modal-box w-11/12 max-w-5xl bg-primary-color">
        <form method="dialog" onSubmit={handleSubmit(setLangData)}>
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
          ) : languages.length ? (
            languages
              .filter((chapter) => chapter?.lang)
              .map((chapter) => (
                <div
                  key={chapter.hid}
                  id="radios"
                  className="flex flex-col items-start"
                >
                  <label className="label cursor-pointer flex gap-4">
                    {chapter.lang === "en" ? (
                      <input
                        type="radio"
                        className="radio radio-primary"
                        defaultChecked
                        value={chapter.lang}
                        {...register("lang")}
                      />
                    ) : (
                      <input
                        type="radio"
                        className="radio radio-primary"
                        value={chapter.lang}
                        {...register("lang")}
                      />
                    )}
                    <span className="label-text">
                      {lang.of(chapter?.lang) ?? "en"}
                    </span>
                  </label>
                </div>
              ))
          ) : (
            <h1>There are no scans</h1>
          )}
          <div id="btns" className="modal-action flex gap-5 justify-end">
            <button
              type="reset"
              className="btn"
              onClick={() => {
                langRef.current?.close();
              }}
            >
              Close
            </button>
            {languages.length ? (
              <input type="submit" className="btn bg-secondary-color"></input>
            ) : (
              <input
                type="submit"
                disabled
                className="btn bg-secondary-color"
              ></input>
            )}
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default LanguageModal;
