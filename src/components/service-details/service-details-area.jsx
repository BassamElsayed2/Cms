import React from "react";
import AnswerQuestion from "@/src/common/answer-question";
import Link from "next/link";
import Image from "next/image";
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/sv-details-1.jpg";
import { useRouter } from "next/router";

const service_details_content = {
  category_title: "Service Category",
  categorys: [
    { id: 1, category: "Branding", cls: "" },
    { id: 1, category: "Web Design", cls: "active" },
    { id: 1, category: "Mobile Application", cls: "" },
    { id: 1, category: "Development", cls: "" },
    { id: 1, category: "Illusutration", cls: "" },
  ],
  bg_img: "/assets/img/service/sv-bg.jpg",

  overview_title: "Service Overview",
  overview_des: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      interdum, orci at dapibus, massa ante pharetra tellus. Maecenas interdum,
      orci at euismod dapibus. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </>
  ),
  overview_list: [
    <>
      Product Quality: <br />{" "}
      <span>
        Automatically syncs across all your devices. You can also access....
      </span>
    </>,
    <>
      On Demand Design: <br />{" "}
      <span>Images, videos, PDFs and audio files are supported.</span>
    </>,
    <>
      Choice of Service:{" "}
      <span>Whatever your business needs, you can choose a service.</span>
    </>,
  ],

  challange_titel: "The Challange",
  challange_des: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      interdum, orci at dapibus, massa ante pharetra tellus. Maecenas interdum,
      orci at euismod dapibus. Lorem ipsum dolor sit amet.!
    </>
  ),
};
const {
  category_title,
  categorys,
  bg_img,
  overview_title,
  overview_des,
  overview_list,
  challange_titel,
  challange_des,
} = service_details_content;

const ServiceDetailsArea = ({ description }) => {
  const { locale } = useRouter();
  return (
    <>
      <div className="sv-details-area pt-100 pb-20">
        <div className="container">
          <div className="row">
            {/* <div className="col-xl-4 col-lg-4">
              <div className="sv-details-widget">
                <div
                  className="tp-service__dashboard mb-30"
                  style={{ backgroundImage: `url(${bg_img})` }}
                >
                  <div className="tp-service__top-content">
                    <h3 className="tp-service__title-white">
                      {locale === "en" ? " Data Analysis" : "تحليل البيانات"}
                      <br />{" "}
                      {locale === "en" ? " Tools & Methods" : "الأدوات والطرق"}
                    </h3>
                    <p>
                      {locale === "en"
                        ? "Lorem Ipsum is simply dummy text"
                        : " انشر ما تريد"}
                    </p>
                    <Link
                      className="tp-btn-orange tp-btn-hover alt-color-white"
                      href="#"
                    >
                      <span>
                        {locale === "en" ? "Work with Us" : "اعمل معنا"}
                      </span>
                      <b></b>
                    </Link>
                  </div>
                  <div className="tp-service__dashdboard-sm-img">
                    <Image
                      src={dashbord}
                      className="wow tpfadeRight"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                      alt="theme-pure"
                    />
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-xl-12 col-lg-12">
              <div className="sv-details-wrapper">
                <div className="sv-details-thumb mb-45">
                  <Image className="w-100" src={service_img} alt="theme-pure" />
                </div>
                <div className="sv-details-title-box mb-55">
                  <h4 className="sv-details-title">
                    {locale === "en"
                      ? "Service Overview"
                      : "نظرة عامة على الخدمة"}
                  </h4>
                  <p>{description?.[locale]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
