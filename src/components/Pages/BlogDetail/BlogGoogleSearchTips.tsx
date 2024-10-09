import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import GoogleSearchTip01 from "assets/img/img-blog-ggsearch-tip-01.png";
import GoogleSearchTip02 from "assets/img/img-blog-ggsearch-tip-02.png";
import GoogleSearchTip03 from "assets/img/img-blog-ggsearch-tip-03.png";
import GoogleSearchTip04 from "assets/img/img-blog-ggsearch-tip-04.png";
import GoogleSearchTip05 from "assets/img/img-blog-ggsearch-tip-05.png";
import GoogleSearchTip06 from "assets/img/img-blog-ggsearch-tip-06.png";
import GoogleSearchTip07 from "assets/img/img-blog-ggsearch-tip-07.png";
import GoogleSearchTip08 from "assets/img/img-blog-ggsearch-tip-08.png";
import GoogleSearchTip09 from "assets/img/img-blog-ggsearch-tip-09.png";
import GoogleSearchTip10 from "assets/img/img-blog-ggsearch-tip-10.png";
import GoogleSearchTip11 from "assets/img/img-blog-ggsearch-tip-11.png";
import GoogleSearchTip12 from "assets/img/img-blog-ggsearch-tip-12.png";

export default function BlogGoogleSearchTips() {
  const blogDetailQuery = useQuery({
    queryKey: ["dataBlog2"],
    queryFn: () =>
      fetch(`http://localhost:5000/blog`).then((res) =>
        res.json()
      ),
  });

  return (
    <section className="main-content blog-page-detail">
      <div className="section">
        {blogDetailQuery.isSuccess && (
          <div className="inner">
            <div className="section-head">
              <div className="title-box">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item prev-page">
                    <Link to={"/blog"} className="link">
                      <span className="text">Blog</span>
                    </Link>
                  </li>
                  <li className="breadcrumb-item current-page">
                    <span>Blog detail</span>
                  </li>
                </ul>
                <h3 className="title-main">{blogDetailQuery.data[1].title}</h3>
              </div>
            </div>
            <div className="section-content">
              <div className="inner">
                <div className="time">
                  <span className="icon-calendar"></span>
                  <span className="value">{blogDetailQuery.data[1].time}</span>
                </div>
                <div className="blog-content highlight-text">
                  <p>Googling or knowing how to search the web for the correct answers to your questions, is a must-skill for any web developer!</p>
                  <p>A regular search with your smart keywords might work out of the box, however, using the right keywords is critical to finding the right solution to your problems.</p>
                  <p>We as web developers or programmers can be too busy, so why not save our time and make our life easier? Below are some useful tips or shortcuts that I have collected and I want to share them with you.</p>

                  <p><strong>1. Use an Exact Phrase</strong></p>
                  <p>The simplest and most effective way to search for something specific is to use quote marks around a phrase or name to search for those exact words in that exact order.</p>
                  <p><em>Syntax:</em> "[keyword 1] [keyword 2]" [keyword 3]</p>
                  <div className="separator"><img src={GoogleSearchTip01} alt="" /></div>
                  <p>The exact or explicit phrase search is very useful for excluding more common but less relevant results.</p>

                  <p><strong>2. Google Search Exclude Word</strong></p>
                  <p>Use a <em>hyphen or the minus “-”</em> to exclude or skip results containing a specific word(s). It will skip the words after the minus symbol.</p>
                  <p><em>Syntax:</em> - [keyword to exclude] [keyword to include]</p>
                  <div className="separator"><img src={GoogleSearchTip02} alt="" /></div>

                  <p><strong>3. Google Search Within a Website</strong></p>
                  <p>Use <em>“site:”</em> to limit and get results from a specific website. For example, we need to list all about JavaScript closures only from the official documentation. Limit your search to it.</p>
                  <p><em>Syntax:</em> site:[website URL] [keywords]</p>
                  <div className="separator"><img src={GoogleSearchTip03} alt="" /></div>

                  <p><strong>4. Google Search File Type</strong></p>
                  <p>Use <em>“filetype:”</em> to search for files with a specific extension (.sql, .doc, .pdf, .svg, .txt, .csv ...)</p>
                  <p><em>Syntax:</em> [keywords] filetype:[file type extension]</p>
                  <p>For example, you want to find a documnet in .doc format</p>
                  <div className="separator"><img src={GoogleSearchTip04} alt="" /></div>

                  <p><strong>5. Google Search Wildcard (Missing or Unknown Words)</strong></p>
                  <p>Use <em>“*” (asterisk) as a wildcard</em> With the asterisk, you can match any word or phrase. This is super useful when you have forgotten the word or you are in doubt. Replace the word with the asterisk “*”.</p>
                  <p><em>Syntax:</em> [keywords 1] * [keywords 2]</p>
                  <div className="separator"><img src={GoogleSearchTip05} alt="" /></div>

                  <p><strong>6. Google Search With Quotation Marks</strong></p>
                  <p>Use <em>“quotation marks”</em> between the search term to look for the exact phrase. This is also very helpful when you have some error in the console and you want to have a precise answer about it.</p>
                  <p><em>Syntax:</em> "[keywords]"</p>
                  <div className="separator"><img src={GoogleSearchTip06} alt="" /></div>

                  <p><strong>7. Google Search Definitions</strong></p>
                  <p>Use <em>“define:”</em> to ask Google for a definition of a word instead of relevant articles.</p>
                  <p><em>Syntax:</em> define:[keyword]</p>
                  <div className="separator"><img src={GoogleSearchTip07} alt="" /></div>

                  <p><strong>8. Google Search Intitle</strong></p>
                  <p>Use <em>“intitle:”</em> to search only in titles, you get the results that have the keyword mentioned in the title.</p>
                  <p><em>Syntax:</em> intitle:[keyword]</p>
                  <div className="separator"><img src={GoogleSearchTip08} alt="" /></div>

                  <p><strong>9. Google Search Related</strong></p>
                  <p>Use <em>“related:”</em> to look for similar websites.</p>
                  <p><em>Syntax:</em> related:[keyword]</p>
                  <div className="separator"><img src={GoogleSearchTip09} alt="" /></div>

                  <p><strong>10. Google Search With Before - After</strong></p>
                  <p>You can limit or filter your search by date ranges with <em>“before:”</em> and <em>“after:”</em> this can be also combined <em>“after:20** before:20**”</em></p>
                  <p>For example, searching “Swiper versions release after:2022 before:2023” will provide you with results that were published in 2023 and onward.</p>
                  <p>If the stack that you use is new then I suggest you only search within the past year, because programming changes and evolves rapidly.</p>
                  <p><em>Syntax:</em> [keyword] after:[Year] before:[Year]</p>
                  <div className="separator"><img src={GoogleSearchTip10} alt="" /></div>

                  <p><strong>11. Google Search With OR - VS</strong></p>
                  <p>With <em>“OR”</em> and <em>“VS”</em> you have a boolean search but also both phrases will be searched. This will search for pages that have either this or that, this against that, this compares to that.</p>
                  <p><em>Syntax:</em> [keyword] OR [keyword] / [keyword] VS [keyword]</p>
                  <div className="separator"><img src={GoogleSearchTip11} alt="" /></div>

                  <p><strong>12. Google Images Search</strong></p>
                  <p>Use <em>image search</em> helps you quickly search for image name, description and type.</p>
                  <p><em>Syntax:</em> [keyword] image type</p>
                  <div className="separator"><img src={GoogleSearchTip12} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
