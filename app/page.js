const featured = [
  ['الهريس','قوام غني ونكهة هادئة تُحضّر على مهل'],
  ['قرص','تمر وسمن بطعم البيت القديم'],
  ['جباب','خبز خفيف يُقدّم ساخناً'],
  ['مرقوقة بالخضرة','عجين رقيق وخضرة بطبخة بيتية'],
  ['خبيص','حلو دافئ بنكهة السمن والهيل'],
  ['العصيدة','حلوى تراثية غنية تُقدّم على الأصول'],
];

const menuSections = [
  {title:'من القدر والصاج', items:['الهريس','قرص','جباب','مرقوقة بالخضرة','دانقو','سحناه','فريد لحم']},
  {title:'الحلو والضيافة', items:['الخبيص','العصيدة','بثيث','لقيمات','خنفروش','محلا زايد','فتة ورق عنب']},
  {title:'من خيرات الدار', items:['دبس تمر','عسل أصلي','عسل برم أصلي','سمن بقر أصلي','جامي','خلاصة السمن','جامي مع الخلاصة','تمر خلاص']},
  {title:'للفنجان', items:['شاي كرك','قهوة سيلانية']},
];

export default function Home(){
  return <main>
    <header>
      <a className="brand" href="#top"><span>روح</span> الماضي</a>
      <nav><a href="#menu">المنيو</a><a href="#story">الحكاية</a><a href="#contact">تواصل</a></nav>
    </header>

    <section id="top" className="hero">
      <div className="glow"/>
      <div className="heroText">
        <p className="eyebrow">من وصفات الدار إلى مائدتك</p>
        <h1>روح الماضي</h1>
        <h2>الطعم الذي<br/>نعرفه من زمان.</h2>
        <p>أطباق وضيـافة بطابع الدار؛ تُحضّر بعناية وتصل إليك كما تحبها.</p>
        <div className="actions"><a className="primary" href="#menu">شوف المنيو</a><a className="secondary" href="https://wa.me/971504977866">اطلب عبر واتساب</a></div>
      </div>
      <div className="heroArt"><div className="plate"><b>روح الدار</b><span>طعم • ضيافة • حكاية</span></div></div>
    </section>

    <section className="intro"><span>أطباق الدار</span><h2>كل طبق له مكانه على السفرة</h2><p>من القدر والصاج إلى الحلو والفنجان، جمعنا المنيو كاملًا في تجربة واضحة وسهلة.</p></section>

    <section className="cards">{featured.map((d,i)=><article key={d[0]} style={{'--i':i}}><div className={'food f'+i}><span>{d[0]}</span></div><div className="cardBody"><small>من المختارات</small><h3>{d[0]}</h3><p>{d[1]}</p></div></article>)}</section>

    <section id="menu" className="fullMenu">
      <div className="menuHeading"><span>المنيو</span><h2>من سفرتنا</h2><p>الأصناف مرتبة مثل منيو حقيقي؛ بلا بطاقات كرتونية ولا تكرار.</p></div>
      <div className="menuGrid">{menuSections.map(section=><section className="menuSection" key={section.title}><h3>{section.title}</h3><div className="menuLines">{section.items.map(item=><div className="menuLine" key={item}><b>{item}</b><i></i><span>من روح الماضي</span></div>)}</div></section>)}</div>
    </section>

    <section id="story" className="story"><div className="storyArt"><span>من الذاكرة<br/>إلى السفرة</span></div><div><small>حكاية روح الماضي</small><h2>نكهة تعرف طريقها للقلب</h2><p>وصفات مألوفة من البيت والمجلس، تُقدّم اليوم بروح مرتبة وبسيطة؛ من أول لقمة حتى آخر فنجان.</p><div className="facts"><b>على مهل<small>تحضير بعناية</small></b><b>من الدار<small>وصفات مألوفة</small></b><b>للضيافة<small>تقديم يليق بالسفرة</small></b></div></div></section>

    <section id="contact" className="contact"><div><small>نلتقي على الطيب</small><h2>خلّ الطريق يوصلك<br/>إلى روح الماضي</h2><p>الاتجاهات والطلب على واتساب في ضغطة واحدة.</p><div className="actions"><a className="primary" href="https://maps.app.goo.gl/3mHeZoCnQZtmYvW68?g_st=ipc">الاتجاهات</a><a className="secondary light" href="https://wa.me/971504977866">050 497 7866</a></div></div><div className="qr"><div className="qrbox">⌖</div><b>الموقع</b><span>Google Maps</span></div></section>

    <footer><div className="brand"><span>روح</span> الماضي</div><p>طعم الدار • ضيافة تحفظ الحكاية</p><p>تصميم وتطوير <a href="https://www.haloveradigital.com">هلوفيرا ديجتال</a></p></footer>
  </main>
}
