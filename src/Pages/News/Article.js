import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IntranetContext } from "../../context";
import { motion } from "framer-motion";
import { Text } from "../../containers/Language";
import video from "./interns.mp4";
import "./news.css";
import Loader from "../../Components/Skeleton/SkeletonLoader";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Article = (props) => {
  const [news, setNews] = useState([]);
  const [isArabic, setIsArabic] = useState(false);
  const [showNextImg, setShowNextImg] = useState(false);
  const [showPrevImg, setShowPrevImg] = useState(false);

  const { getLang, fetchData } = useContext(IntranetContext);

  useEffect(() => {
    fetchData("news").then((res) => {
      setNews(res.news);
    });
    setIsArabic(getLang());
  }, []);
  // console.log(news);
  const { id } = props.match.params;
  // console.log(id);

  const article = news && news.find((item) => item.count === Number(id));

  return (
    <div className="container mt-5">
      {article ? (
        <div className="row ">
          {article.count !== 2 &&
            article.count !== 21 &&
            article.count !== 20 &&
            article.count !== 25 &&
            article.count !== 26 &&
            article.count !== 29 &&
            article.count !== 34 &&
            article.count !== 37 &&
            article.count !== 38 &&
            article.count !== 40 &&
            article.count !== 43 &&
            article.count !== 44 &&
            article.count !== 46 &&
            article.count !== 49 && (
              <img
                src={article?.image}
                className="mx-auto d-block col-12 col-md-8"
                height="300"
                width="200"
                alt="..."
              />
            )}

          {article.count === 2 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <video controls autoPlay width={1000}>
                <source type="video/mp4" src={video} />
              </video>
            </div>
          )}
          {article.count === 21 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <video controls autoPlay width={1000}>
                <source
                  type="video/mp4"
                  src="https://dmgian.corp-dmg.com/videos/medical-refund/video.mp4"
                />
              </video>
            </div>
          )}
          {article.count === 20 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <video controls autoPlay width={1000}>
                <source
                  type="video/mp4"
                  src="https://dmgian.corp-dmg.com/videos/family-fund/video.mp4"
                />
              </video>
            </div>
          )}
          {article.count === 25 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <video controls autoPlay width={1000}>
                  <source
                    type="video/mp4"
                    src="https://dmgian.corp-dmg.com/videos/dme-grow-event/video.mp4"
                  />
                </video>
              </div>
            </div>
          )}
          {article.count === 29 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <video controls autoPlay width={1000}>
                  <source
                    type="video/mp4"
                    src="https://dmgian.corp-dmg.com/videos/mv-aswan/video.mp4"
                  />
                </video>
              </div>
            </div>
          )}
          {article.count === 26 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <h4 className="mt-5 mb-1 text-center fw-bold Tajawal">
                  {article.title_ar}
                </h4>
                <p dir="rtl" className="Tajawal text-muted  text-center">
                  لقراءة المزيد من اللقاء الصحفي للمهندس عمرو سليمان عن أليفا مع
                  مجلة خليجي تايمز
                  <br />
                  <a
                    className=" fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.khaleejtimes.com/business/realty/aliva-redefining-the-real-estate-industry-in-the-region-with-mountain-view-egypt-latest-venture?_refresh=true"
                  >
                    اضغط هنا
                  </a>
                </p>
              </div>
            </div>
          )}
          {article.count === 34 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <h4 className="mt-5 mb-1 text-center fw-bold Tajawal">
                  {article.title_ar}
                </h4>
                <p dir="rtl" className="Tajawal text-muted  text-center">
                  لأن تعزيز تجربة عملائنا بتبدأ من تعزيز تجربة موظفينا ماونتن
                  فيو بتقدملك تجربة جديدة، مميزة ومختلفة لكل أفراد عيلتنا داخل
                  المجموعة "X-Line" هي خدمة جديدة بنوفرها ليك ولأي Referral تبعك
                  من قرايبك أو صحابك من خلال الرد على أي أسئلة أو استفسارات خاصة
                  بماونتن فيو و بمجرد الإتصال من رقمك المسجل على السيستم هيتم
                  تحويلك تلقائيآً على خدمة X-line ومن خلالها هيتم تقديم كل الدعم
                  من فريق متخصص ومُدرب هيساعدك في الإجابة على كل الاستفسارات
                  وكمان متابعة كل Case بتقدمها, عشان نضمن حل سريع لأي تحدي
                  بتواجه وده هيخلينا نقدم أفضل تجربة ممكنة ليك ولأي عميل تبعك
                  وعشان تعرف تفاصيل أكتر
                  <br />
                  <a
                    className=" fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dmgian.corp-dmg.com/videos/x-line/"
                  >
                    اضغط هنا لمشاهد الفيديو
                  </a>
                </p>
              </div>
            </div>
          )}
          {article.count === 37 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <h4 className="mt-5 mb-1 text-center fw-bold Tajawal">
                  {article.title_ar}
                </h4>
                <p dir="rtl" className="Tajawal text-muted  text-center">
                  شهر رمضان دايماً فرصة بتشجعنا إننا نمشي خطوة زيادة للعطاء
                  والخير السنة دي مع بعض هنمشي للخير خطوات زيادة نسعد بيها أكبر
                  عدد من الأسر وهيكون في أنشطة مختلفة. هنبدأ بتوزيع كراتين رمضان
                  على الأسر الأكثر إحتياجاً من مستفيدين برامج مؤسسة ماونتن فيو
                  بقرى محافظة الفيوم. سعر كرتونة الطعام هيكون 500 جنيه/15 كيلو
                  تقدر تشارك بالتبرع، ولو عايز تعمل خطوة خير زيادة تقدر تتطوع
                  معانا في تعبئة الكراتين وتوزيعها. للمشاركة بالتبرع أو التطوع
                  <br />
                  <a
                    className=" fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dmgian.corp-dmg.com/surveyPlatform/survey.php?id=5550"
                  >
                    سجل هنا
                  </a>
                </p>
                <p className="text-center fw-bold text-muted Tajawal">
                  #خطوة_زيادة_لنشر_السعادة رمضان كريم
                </p>
              </div>
            </div>
          )}
          {article.count === 38 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <h4 className="mt-5 mb-1 text-center fw-bold Tajawal">
                  {article.title_ar}
                </h4>
                <p dir="rtl" className="Tajawal text-muted  text-center">
                  بمناسبة اليوم العالمي للمرأة، في إطار احتفالنا بهذا اليوم،
                  بندعوكم لحضور ندوة "Myself & I" مع نورهان ماهر بالتعاون مع
                  شركة Avrelleلمنتجات الشعر يوم الخميس ٧ مارس من الساعة ١١ص وحتى
                  الساعة ١٢ م في مبنى DMG - Innovation Room. نورهان ماهر لايف
                  كوتش متخصصة في علم النفس الإيجابي، هتشاركنا خلال الندوة طرق
                  الاهتمام والعناية النفسية وطريقة استخدام عجلة المشاعر
                  بالتفاصيل ومعرفة طرق التصالح النفسي وازاي نحب نفينا وهل الحب
                  دا فطري ولا مكتسب؟ هيكون كمان في خصم خاص ٢٠ ٪ لكل موظفينا على
                  أي منتج من منتجات Avrelle. للمشاركة وتأكيد التسجيل
                  <br />
                  <a
                    className=" fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://calendly.com/dmg-family/avrelle-seminar-x-norhan-maher?month=2024-03"
                  >
                    اضغط هنا
                  </a>
                </p>
                <p className="text-center fw-bold text-muted Tajawal">
                  هيكون في هدايا ومفاجأت خاصة لكل الحاضرين
                </p>
              </div>
            </div>
          )}

          {article.count === 40 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <br />
                <br />
                <br />
                <center>
                  <a
                    className=" fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dmgian.corp-dmg.com/videos/mustafa-housney/"
                  >
                    لمشاهدة الفيديو اضغط هنا
                  </a>
                </center>
              </div>
            </div>
          )}
          {article.count === 43 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <br />
                <br />
                <br />
                <center>
                  <p>
                    تقدم WellSpring Campsتجربة لا مثيل لها لطفلك من التعلم و
                    الترابط خصم ٥٠ ٪ العرض ساري لمدة ١٥ يوم للحجز والاستعلام عن
                    تفاصيل الكامب
                  </p>
                  <a
                    className="fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://wellspringegypt.com/camps/sub-camp/10"
                  >
                    اضغط هنا
                  </a>
                </center>
              </div>
            </div>
          )}
          {article.count === 44 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <br />
                <br />
                <br />
                <center>
                  <p>
                    كل سنة وأنتم طيبين بمناسبة اقتراب عيد الأضحى المبارك ٢٠٢٣
                    قدرنا ننشر السعادة على ١٤٤٠ أسرة بأضحيتنا ونسد جزء من
                    احتياجتهم الغذائية هدفنا في ٢٠٢٤ السنة دي أكبر، ومع بعض
                    هنشارك بأضحيتنا في نشر السعادة على ٢٥٠٠ أسرة مستحقة شارك
                    معانا في برنامج "صك الأضحية - بلدي" بالتعاون مع جمعية صناع
                    الخير الأضحية الواحدة تشمل ٧ أسهم وتقدر تشارك بسهم أو اكتر
                    بالمشاركة مع زمايلك أو قرايبك قيمة السهم = ١٠٠٠٠ جنيه (عشرة
                    آلاف جنيه مصري) حصة الفرد/ السهم = ٩ كيلو جرام إمكانية تقسيط
                    المبلغ خصماً من الراتب الشهري بحد أقصي ١٠ أشهر، مع إمكانية
                    التوصيل للمنازل داخل القاهرة والجيزة في حالة الكاجوال أو
                    الدفع النقدي: سيتم توفير مندوب من الجمعية في شركاتنا يومي
                    الإثنين أو الأربعاء من كل اسبوع بدءاً ٢٠ مايو وحتى ٥ يونيو
                    من الساعة ١٢ ظهرا ًوحتى الساعة ٣ عصراً ولمزيد من الإستفسارات
                    يرجي الإتصال بالأرقام التالية: سحر حسن (ماونتن فيو)
                    ٠١٠٢٥٧٩٩٩٠٣ علياء محمد (DMA) ٠١٢٢٣٢٩٤٥٩٤ محمد ياسر ) DME )
                    ٠١٢٢٧٨٣٧٧٣٤ أخر ميعاد للتسجيل يوم الأحد الموافق ٩ يونيو ٢٠٢٤
                  </p>
                  <a
                    className="fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dmgian.corp-dmg.com/surveyPlatform/survey.php?id=5081"
                  >
                    سجل هنا
                  </a>
                </center>
              </div>
            </div>
          )}
          {article.count === 46 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <br />
                <br />
                <br />
                <center>
                  <p> إنطلاق المرحلة التانية من Benefits Bot</p>
                  <br />
                  <p>
                    تسهيلاً منا على كل موظفينا، يسعدنا إضافة خدمات برنامج مزايا
                    موجودة على .عشان تعرف كل العروض والخصومات المقدمة من
                    مجموعتنا ليك ولكل فرد من أفراد عيلتك :لمعرفة طريقة إستخدام
                    Benefits Bot لأول مرة ١- سجل رقم الــــــ Benefits Bot علي
                    تليفونك 01050505058 أو Scan QR Code .٢- اكتب hi ثم اختار
                    اللغة .٣- اختار الخدمة اللي انت محتاجها
                  </p>
                  <a
                    className="fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dmgian.corp-dmg.com/videos/benefits-bot-phase-2/"
                  >
                    ولمعرفة تفاصيل أكتر شاهد الفيديو
                  </a>
                </center>
              </div>
            </div>
          )}
          {article.count === 49 && (
            <div className="mx-auto col-8  d-flex justify-content-center ">
              <div className="details">
                <img
                  src={article?.image}
                  className="mx-auto d-block col-12 "
                  alt="..."
                />
                <br />
                <br />
                <br />
                <center>
                  <p>بمناسبة يوم المتبرعين بالدم</p>
                  <br />
                  في إطار مسئوليتنا تجاه المجتمع والمساهمة في إنقاذ الأرواح،
                  يسعدنا التعاون مع خدمات نقل الدم القومية والتي ستتواجد في
                  شركاتنا خلال الأسبوع القادم لتمكنكم من التبرع بالدم. تعد خدمات
                  نقل الدم القومية شبكة بنوك دم تتكون من ٢٨ مركز وهي الجهة
                  الشرعية الوحيدة التابعة لوزارة الصحة، مشاركتك هتساهم في إنقاذ
                  كلاً من: مرضى الدم. - مرضى الثلاسيميا. - ​مرضى الهيموفيليا. -
                  مصابين الحوادث. - - مصابين غزة. إرشادات التبرع: - مدة التبرع
                  ١٥ دقيقة. -قبل التبرع هيتعمل تحليل أنيميا للموظف. - بعد التبرع
                  سيتم إبلاغك بفصيلة الدم خلال اسبوع على الإيميل. - في حالة وجود
                  اي مشكلة صحية لا ينصح بالتبرع. سيتواجد فريق خدمات نقل الدم
                  القومية في الأوقات والمواقع التالية: للتسجيل
                  <br />
                  <a
                    className="fw-bold Tajawal"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dmgian.corp-dmg.com/surveyPlatform/survey.php?id=6152"
                  >
                    اضغط هنا
                  </a>
                </center>
              </div>
            </div>
          )}

          <div className="d-flex justify-content-between ">
            <div className="borderr">
              {article.count !== 1 && (
                <div className="position-relative rel">
                  <div
                    className={`position-aboslute abs ${
                      showPrevImg ? "" : "opacity-0"
                    } `}
                  >
                    <img
                      width={200}
                      height={200}
                      className="mg-fluid"
                      src={`${news[id - 2].image}`}
                      alt="Previous article image"
                    />
                  </div>
                </div>
              )}

              {article.count > 1 && (
                <Link
                  onMouseEnter={() => setShowPrevImg(true)}
                  onMouseLeave={() => setShowPrevImg(false)}
                  className="prevLink ms-5"
                  to={`${article?.count - 1}`}
                >
                  <h2 className="ms-5">
                    <GrLinkPrevious />
                  </h2>
                </Link>
              )}
            </div>
            <div className="borderr">
              {article?.count !== news.length && (
                <div className="position-relative rel">
                  <div
                    className={` position-aboslute abs ${
                      showNextImg ? "" : "opacity-0"
                    } `}
                  >
                    <div className="d-flex flex-column">
                      <small
                        style={{ width: "200px !important" }}
                        className=" w-25 text-wrap d-inline-block "
                      >
                        {/* {news[id].title} */}
                      </small>
                      <img
                        width={200}
                        height={200}
                        className="mg-fluid"
                        src={`${news[id].image}`}
                        alt="Next article image"
                      />
                    </div>
                  </div>
                </div>
              )}
              {article?.count < news.length && (
                <Link
                  onMouseEnter={() => setShowNextImg(true)}
                  onMouseLeave={() => setShowNextImg(false)}
                  className="nextLink ms-5"
                  to={`${article?.count + 1}`}
                >
                  <h2 className="ms-3">
                    <GrLinkNext />
                  </h2>
                </Link>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center content">
            <div className="col-8 ">
              {article.count !== 20 &&
                article.count !== 21 &&
                article.count !== 26 &&
                article.count !== 29 &&
                article.count !== 34 &&
                article.count !== 37 &&
                article.count !== 38 &&
                article.count !== 40 &&
                article.count !== 43 &&
                article.count !== 44 &&
                article.count !== 46 &&
                article.count !== 49 && (
                  <div className="details">
                    <h2 className="mb-4 text-center fw-bold Tajawal">
                      {article.title_ar}
                    </h2>
                    <p
                      dir="rtl"
                      className={isArabic ? "Tajawal" : "Tajawal text-muted"}
                    >
                      {article.details_ar}
                    </p>
                  </div>
                )}
            </div>
          </div>
          <div className=" mx-auto text-center mb-3 ">
            <Link to="/news" style={{ marginTop: "2rem" }}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                }}
              >
                <Button className="default-btn text-center">
                  <Text tid="returnNews" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center mb-3 ">
          <Loader />
          <Link to="/news" style={{ marginTop: "2rem", background: "#C4AB7D" }}>
            <Button className="default-btn " style={{ background: "#C4AB7D" }}>
              <Text tid="returnNews" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Article;
