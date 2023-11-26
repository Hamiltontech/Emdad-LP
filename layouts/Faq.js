import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container pt-12 ">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row -mt-6 ">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6 items-stretch flex">
              <div className="p-12  shadow bg-primary">
                <div className="faq-head relative">
                  {markdownify(faq.title, "h4")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
