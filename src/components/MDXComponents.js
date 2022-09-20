import * as React from "react"

const MDXComponents = {
  h1: props => <h1 className="text-6xl md:text-8xl font-semibold mt-10 pb-6 md:pb-8" {...props} />,
  h2: props => <h2 className="text-4xl md:text-6xl font-semibold mt-10 pb-4 md:pb-6" {...props} />,
  h3: props => <h3 className="text-2xl md:text-4xl font-semibold mt-10 pb-2 md:pb-4" {...props} />,
  h4: props => <h4 className="text-xl md:text-2xl font-semibold pt-10" {...props} />,
  //h5: props => <h5 className="" {...props} />,
  //h6: props => <h6 className="" {...props} />,
  p: props => <p className="py-3 md:py-5" {...props} />,
  //thematicBreak: props => <thematicBreak className="" {...props} />,
  //blockquote: props => <blockquote className="" {...props} />,
  ul: props => <ul className="pl-8 my-5 marker:text-teal-900 list-disc list-outside" {...props} />,
  ol: props => <ol className="pl-8 my-5 marker:text-teal-900 list-decimal list-outside" {...props} />,
  li: props => <li className="my-2" {...props} />,
  //table: props => <table className="" {...props} />,
  //tr: props => <tr className="" {...props} />,
  //th: props => <th className="" {...props} />,
  //td: props => <td className="" {...props} />,
  //pre: props => <pre className="" {...props} />,
  //em: props => <em className="" {...props} />,
  //strong: props => <strong className="" {...props} />,
  //delete: props => <delete className="" {...props} />,
  //hr: props => <hr className="" {...props} />,
  code: props => <code className="bg-slate-200" {...props} />,
  a: props => <a className="underline hover:text-teal-500 focus:text-teal-500 active:text-teal-900" {...props} />,
  //img: props => <img className="" {...props} />,
}

export default MDXComponents
