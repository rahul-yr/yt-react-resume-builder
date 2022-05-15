import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

function SampleResume() {
  const printRef = useRef();
  const [wid, setWid] = React.useState(0);
  const [hei, setHei] = React.useState(0);

  const handleHW = () => {
    // console.log(printRef);
    setHei(printRef.current.clientHeight);
    setWid(printRef.current.clientWidth);
  };

  return (
    <div className="bg-slate-50 h-[500px] overflow-auto">
      <button onClick={() => handleHW()}>TWO</button>
      {/* <div className="bg-slate-300 h-[297mm] w-[210mm]" ref={printRef}>
        <ReactToPrint
          content={() => printRef.current}
          trigger={() => <button>Print</button>}
        />
        <p>{wid}</p> &nbsp;|&nbsp;<p>{hei}</p>
      </div> */}
      <div className="bg-slate-300 h-[297mm] w-[210mm]" ref={printRef}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          neque obcaecati ad odit inventore consequuntur similique. Expedita qui
          iure mollitia dolorem quisquam molestias, dolores, sint maiores unde,
          totam error labore aliquid perspiciatis at. Dignissimos eaque nisi,
          quas non aspernatur inventore necessitatibus aperiam! Laboriosam
          fugiat beatae voluptatum magnam modi qui blanditiis? Voluptas expedita
          eum corporis, vel hic sed consectetur quia repellat fugit aliquid
          nihil tempora temporibus numquam nam? Totam id, optio illum delectus
          sapiente architecto deserunt aperiam voluptas accusantium ipsam!
          Necessitatibus consequatur maxime architecto rerum mollitia quos
          veritatis eveniet enim, ducimus iste sequi sint magnam corporis neque
          suscipit quod, temporibus nesciunt dolor dolorum! Corrupti quasi
          commodi facilis consequuntur ab minus totam dolores eligendi
          accusantium voluptatibus? Voluptates corporis dolores qui ut maiores,
          vel expedita quaerat. Tenetur reprehenderit provident similique eaque,
          quam quia neque delectus iure a dolore nemo itaque eum alias, est
          blanditiis obcaecati? Recusandae molestiae illum veniam debitis
          quisquam aspernatur quaerat aperiam dolore amet? Ullam odit at earum,
          maiores molestiae sit facere amet magnam deserunt. Quia modi dolores
          id culpa, tempora accusantium voluptas alias rem sequi saepe, cum
          maiores delectus eaque consequuntur et soluta quae odio, officia optio
          nam expedita. Deserunt fuga possimus totam labore cupiditate
          recusandae porro, ducimus reprehenderit, quis magnam repudiandae
          aliquam, nostrum excepturi accusamus consequuntur eaque nobis fugiat
          illo sint reiciendis. Consequatur non deserunt rem, sequi saepe
          itaque, possimus debitis pariatur, natus soluta voluptates!
          Necessitatibus dolore, non illo reprehenderit repellendus atque nisi
          deserunt fugit minima quos magnam explicabo mollitia quisquam, quam
          aperiam porro, voluptates voluptatibus animi recusandae blanditiis qui
          assumenda perferendis quae. Magni iure dicta exercitationem
          cupiditate! Aspernatur fuga deserunt voluptas quibusdam tenetur qui
          cumque dolores beatae eaque! Minima similique sequi, molestias nihil
          voluptas reiciendis esse, est facere cum deleniti recusandae
          perferendis repellendus tenetur, omnis fugit harum et? Esse ut optio
          cumque. Laudantium illo nisi repudiandae deserunt perspiciatis,
          placeat beatae quis exercitationem consectetur quisquam sed quia rerum
          similique nam nesciunt aut suscipit commodi sint quidem ex esse
          numquam. Voluptates neque rerum sunt accusamus ipsa nulla consequatur
          accusantium fugiat consectetur dolorem minima aliquam a numquam illum,
          beatae laudantium commodi quod modi quidem autem? Eos quos aliquam,
          minima blanditiis tenetur nam sed iure aspernatur. Veritatis iusto
          delectus sunt rerum. Atque, vitae sint? Autem incidunt amet aut iusto
          quidem alias itaque sed mollitia ad earum expedita tempore, odit dolor
          sit recusandae praesentium voluptatem eos explicabo voluptatum quae,
          quia error a omnis! Veniam, eligendi rerum quibusdam laudantium
          nesciunt saepe omnis non assumenda? Dignissimos aspernatur sit hic
          odio obcaecati eius doloribus tempora quidem, voluptatibus distinctio
          et ex dolor delectus in. Illum, facere eos molestiae culpa sequi
          magnam dolorem cumque quod animi laboriosam aspernatur modi, doloribus
          corporis. Quidem suscipit labore saepe veniam aliquam maiores,
          inventore ea libero cupiditate recusandae odit neque ut itaque natus!
          Dolor, quam ipsa! Voluptate molestiae corrupti similique reprehenderit
          excepturi omnis quod, dolor dignissimos magnam molestias sit culpa id
          recusandae incidunt pariatur, beatae cumque sapiente ad, officia
          mollitia ratione accusamus quia asperiores. Cum aperiam recusandae
          voluptatibus fugit dolores aliquid excepturi laboriosam, nostrum totam
          ab voluptates, esse odio ex quod laborum magni!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          neque obcaecati ad odit inventore consequuntur similique. Expedita qui
          iure mollitia dolorem quisquam molestias, dolores, sint maiores unde,
          totam error labore aliquid perspiciatis at. Dignissimos eaque nisi,
          quas non aspernatur inventore necessitatibus aperiam! Laboriosam
          fugiat beatae voluptatum magnam modi qui blanditiis? Voluptas expedita
          eum corporis, vel hic sed consectetur quia repellat fugit aliquid
          nihil tempora temporibus numquam nam? Totam id, optio illum delectus
          sapiente architecto deserunt aperiam voluptas accusantium ipsam!
          Necessitatibus consequatur maxime architecto rerum mollitia quos
          veritatis eveniet enim, ducimus iste sequi sint magnam corporis neque
          suscipit quod, temporibus nesciunt dolor dolorum! Corrupti quasi
          commodi facilis consequuntur ab minus totam dolores eligendi
          accusantium voluptatibus? Voluptates corporis dolores qui ut maiores,
          vel expedita quaerat. Tenetur reprehenderit provident similique eaque,
          quam quia neque delectus iure a dolore nemo itaque eum alias, est
          blanditiis obcaecati? Recusandae molestiae illum veniam debitis
          quisquam aspernatur quaerat aperiam dolore amet? Ullam odit at earum,
          maiores molestiae sit facere amet magnam deserunt. Quia modi dolores
          id culpa, tempora accusantium voluptas alias rem sequi saepe, cum
          maiores delectus eaque consequuntur et soluta quae odio, officia optio
          nam expedita. Deserunt fuga possimus totam labore cupiditate
          recusandae porro, ducimus reprehenderit, quis magnam repudiandae
          aliquam, nostrum excepturi accusamus consequuntur eaque nobis fugiat
          illo sint reiciendis. Consequatur non deserunt rem, sequi saepe
          itaque, possimus debitis pariatur, natus soluta voluptates!
          Necessitatibus dolore, non illo reprehenderit repellendus atque nisi
          deserunt fugit minima quos magnam explicabo mollitia quisquam, quam
          aperiam porro, voluptates voluptatibus animi recusandae blanditiis qui
          assumenda perferendis quae. Magni iure dicta exercitationem
          cupiditate! Aspernatur fuga deserunt voluptas quibusdam tenetur qui
          cumque dolores beatae eaque! Minima similique sequi, molestias nihil
          voluptas reiciendis esse, est facere cum deleniti recusandae
          perferendis repellendus tenetur, omnis fugit harum et? Esse ut optio
          cumque. Laudantium illo nisi repudiandae deserunt perspiciatis,
          placeat beatae quis exercitationem consectetur quisquam sed quia rerum
          similique nam nesciunt aut suscipit commodi sint quidem ex esse
          numquam. Voluptates neque rerum sunt accusamus ipsa nulla consequatur
          accusantium fugiat consectetur dolorem minima aliquam a numquam illum,
          beatae laudantium commodi quod modi quidem autem? Eos quos aliquam,
          minima blanditiis tenetur nam sed iure aspernatur. Veritatis iusto
          delectus sunt rerum. Atque, vitae sint? Autem incidunt amet aut iusto
          quidem alias itaque sed mollitia ad earum expedita tempore, odit dolor
          sit recusandae praesentium voluptatem eos explicabo voluptatum quae,
          quia error a omnis! Veniam, eligendi rerum quibusdam laudantium
          nesciunt saepe omnis non assumenda? Dignissimos aspernatur sit hic
          odio obcaecati eius doloribus tempora quidem, voluptatibus distinctio
          et ex dolor delectus in. Illum, facere eos molestiae culpa sequi
          magnam dolorem cumque quod animi laboriosam aspernatur modi, doloribus
          corporis. Quidem suscipit labore saepe veniam aliquam maiores,
          inventore ea libero cupiditate recusandae odit neque ut itaque natus!
          Dolor, quam ipsa! Voluptate molestiae corrupti similique reprehenderit
          excepturi omnis quod, dolor dignissimos magnam molestias sit culpa id
          recusandae incidunt pariatur, beatae cumque sapiente ad, officia
          mollitia ratione accusamus quia asperiores. Cum aperiam recusandae
          voluptatibus fugit dolores aliquid excepturi laboriosam, nostrum totam
          ab voluptates, esse odio ex quod laborum magni!
        </p>
        <p>{wid}</p> &nbsp;|&nbsp;<p>{hei}</p>
      </div>
    </div>
  );
}

export default SampleResume;
