import { IPrompt } from "types";

export default function Item({ content, fullData }) {
  const filteredItems = fullData.filter((item: IPrompt) => {
    return item.id === content.id;
  });

  const allVariantsTested = filteredItems.every((item: IPrompt) => item.tested);

  return (
    <a href={`prompts/${content.id}`}>
      <div className="text-xs mx-auto border border-black rounded px-2 sm:w-80 w-72 hover:bg-gray-100 text-left">
        <p className="py-1">{content.prompt.slice(0, 130)}...</p>

        <hr className="border-black my-0" />

        <div className="py-1 font-normal">
          <span className="tracking-wide uppercase">{content.cognitiveBias}</span>

          <span className="uppercase"> - {content.variants} versions </span>
        </div>

        <hr className="border-black my-0" />

        <div className="py-1 font-normal h-6">
          {filteredItems.length !== content.variants && <span className="font-bold">MISSING VARIANTS! -</span>}
          {allVariantsTested ? <span> TESTED </span> : <span> NOT TESTED YET </span>}
        </div>
      </div>
    </a>
  );
}
