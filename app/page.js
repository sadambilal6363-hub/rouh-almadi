const dishes=[
['جباب','https://www.spinneys.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/c/h/chebab.jpg'],
['لقيمات','https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/10/A9eMechT-almashowa-1200x800.jpg'],
['العصيدة','https://dubaiculture.ae/-/media/Aseeda.jpg?h=600&hash=BC4A8C9B45321265E184F6690F9AD4C5&w=900'],
['الخبيص','https://static.hiamag.com/styles/autox754/public/article/30/11/2020/9967041-778326794.jpg?itok=JEuV_Nm4'],
['فريد لحم','https://kitchen.sayidaty.net/uploads/node/_Lamb-Thareed.jpg'],
['دبس تمر','https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics_v2/medium/tahini_and_date_syrup_dip_dibis_w_rashi.jpg'],
['دانقو','https://www.atyabtabkha.com/uploads/sites/2/2021/10/6e434c030bc60b80086ce63fb33d25084019adba.jpg'],
['عسل أصلي','https://cdn.salla.sa/baXvN/x5LYakisU9sWLgeq4Jo0bsrgsnZlcDBHBz83csma.png'],
['سمن بقر أصلي','https://images.news18.com/news18marathi/uploads/2025/12/Ghee-Benefits-2025-12-fd8007a859a78bcdf7cc9edb4a1ef93f-16x9.jpg'],
['تمر خلاص','https://media.zid.store/02ba9a4e-187b-490a-8a73-e1a1c66e51d2/45870760-34f7-4790-84d1-03d03e8aadb6.jpg'],
['قهوة سيلانية','https://media.zid.store/02ba9a4e-187b-490a-8a73-e1a1c66e51d2/45870760-34f7-4790-84d1-03d03e8aadb6.jpg'],
['شاي كرك','https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/10/A9eMechT-almashowa-1200x800.jpg']
];
const phone='971522206858';
const displayPhone='052 220 6858';
const maps='https://www.google.com/maps/search/?api=1&query=4WGM%2BH4%2C%20Mleiha%2C%20Sharjah';
export default function Home(){return <main>
<header><a className="brand" href="#top"><span>روح</span> الماضي</a><nav><a href="#menu">المنيو</a><a href="#story">حكايتنا</a><a href="#contact">تواصل</a></nav></header>
<section id="top" className="hero realHero"><div className="heroText"><p className="eyebrow">من وصفات الدار إلى مائدتك</p><h1>روح الماضي</h1><h2>أطباق تحكي حكايتنا.</h2><p>الطعم الذي نعرفه من زمان، بصورة تفتح النفس وضيافة لها روحها.</p><div className="actions"><a className="primary" href="#menu">استكشف المنيو</a><a className="secondary" href={`https://wa.me/${phone}`}>واتساب</a></div></div></section>
<section id="menu" className="visualMenu"><div className="menuTitle"><span>قائمتنا</span><h2>شوفها قبل ما تختارها</h2><p>صورة الطبق أولاً، واسمه تحتها.</p></div><div className="photoGrid">{dishes.map((d,i)=><article className="dish" key={d[0]}><div className="dishPhoto"><img src={d[1]} alt={d[0]} loading={i<4?'eager':'lazy'}/></div><h3>{d[0]}</h3></article>)}</div></section>
<section id="story" className="story storyRich"><div className="storyArt"><span>من الذاكرة<br/>إلى السفرة</span></div><div><small>حكايتنا</small><h2>حكاية بدأت من طعم نعرفه</h2><p>روح الماضي تجمع وصفات الدار ونكهات الضيافة التي اعتدنا عليها، وتقدمها كما نحب أن تصل إلى المائدة؛ بطعم مألوف، مكونات مختارة، وتحضير يحفظ لكل وصفة شخصيتها.</p><div className="storyQuote">الطعم يتغيّر مع الوقت، لكن بعض النكهات تعرف طريقها للذاكرة.</div></div></section>
<section className="homeTable"><div className="homeTablePhoto"></div><div className="homeTableText"><small>من الدار</small><h2>السفرة ليست أطباقًا فقط</h2><p>قهوة، تمر، رائحة خبز، وطبق وصل للتو. التفاصيل الصغيرة هي التي تصنع الضيافة التي نتذكرها.</p><div className="miniFacts"><span><b>وصفات مألوفة</b><small>بطعمها وشخصيتها</small></span><span><b>تحضير بعناية</b><small>من البداية للتقديم</small></span></div></div></section>
<section className="process"><div className="processHead"><small>نحضّرها على مهل</small><h2>من المكونات إلى السفرة</h2></div><div className="processGrid"><article className="processOne"><div></div><b>نختار</b><p>مكونات بسيطة وواضحة.</p></article><article className="processTwo"><div></div><b>نحضّر</b><p>الوصفة تأخذ وقتها.</p></article><article className="processThree"><div></div><b>نقدّم</b><p>تصل للسفرة كما يجب.</p></article></div></section>
<section className="memory"><div><small>للبيت • للمجلس • للّمة</small><h2>ضيافة تبقى في الذاكرة</h2><p>اختر من القائمة، واترك الباقي علينا.</p><a href={`https://wa.me/${phone}`}>اطلب عبر واتساب ←</a></div></section>
<section id="contact" className="contact"><div><small>روح الماضي • مليحة</small><h2>اطلبها لسفرتك</h2><p>طريق 102 – مليحة، إمارة الشارقة<br/>4WGM+H4</p><div className="actions"><a className="primary" href={maps}>الاتجاهات</a><a className="secondary light" href={`tel:+${phone}`}>{displayPhone}</a><a className="secondary light" href={`https://wa.me/${phone}`}>واتساب</a></div></div></section>
<footer><div className="brand"><span>روح</span> الماضي</div><p>طريق 102 • مليحة – الشارقة • {displayPhone}</p><p>تصميم وتطوير <a href="https://www.haloveradigital.com">هلوفيرا ديجتال</a></p></footer>
</main>}
