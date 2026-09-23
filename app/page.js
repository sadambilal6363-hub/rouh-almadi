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
export default function Home(){return <main>
<header><a className="brand" href="#top"><span>روح</span> الماضي</a><nav><a href="#menu">المنيو</a><a href="#contact">تواصل</a></nav></header>
<section id="top" className="hero realHero"><div className="heroText"><p className="eyebrow">من وصفات الدار إلى مائدتك</p><h1>روح الماضي</h1><h2>أطباق تحكي حكايتنا.</h2><p>الطعم الذي نعرفه من زمان، بصورة تفتح النفس وضيافة لها روحها.</p><div className="actions"><a className="primary" href="#menu">استكشف المنيو</a><a className="secondary" href="https://wa.me/971504977866">واتساب</a></div></div></section>
<section id="menu" className="visualMenu"><div className="menuTitle"><span>قائمتنا</span><h2>شوفها قبل ما تختارها</h2><p>صورة الطبق أولاً، واسمه تحتها. بدون قوائم طويلة.</p></div><div className="photoGrid">{dishes.map((d,i)=><article className="dish" key={d[0]}><div className="dishPhoto"><img src={d[1]} alt={d[0]} loading={i<4?'eager':'lazy'}/></div><h3>{d[0]}</h3></article>)}</div></section>
<section className="story"><div className="storyArt"><span>من الذاكرة<br/>إلى السفرة</span></div><div><small>روح الماضي</small><h2>ضيافة تبقى في الذاكرة</h2><p>المشهد كله مستوحى من الدار والمجلس والسفرة؛ بسيط، دافئ، وحقيقي.</p></div></section>
<section id="contact" className="contact"><div><small>جاهز؟</small><h2>اطلب أو تعالنا</h2><div className="actions"><a className="primary" href="https://maps.app.goo.gl/3mHeZoCnQZtmYvW68?g_st=ipc">موقعنا</a><a className="secondary light" href="https://wa.me/971504977866">050 497 7866</a></div></div></section>
<footer><div className="brand"><span>روح</span> الماضي</div><p>طعم الدار • ضيافة تحفظ الحكاية</p><p>تصميم وتطوير <a href="https://www.haloveradigital.com">هلوفيرا ديجتال</a></p></footer>
</main>}
