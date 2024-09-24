import React, { useState } from 'react';

const cards = [
    { name: "及时雨宋江", leafletImgUrl: `${process.env.PUBLIC_URL}/image/songjiang.jpg`,poem:"自幼曾攻经史,长成亦有权谋,恰如猛虎卧荒丘,潜伏爪牙忍受,不幸刺文双颊,那堪配在江州,他年若得报冤仇,血染浔阳江口," },
        { name: "豹子頭林冲", leafletImgUrl: `${process.env.PUBLIC_URL}/image/linchong.jpg`,poem:'仗义是林冲,为人最朴忠,江湖驰闻望,慷慨聚英雄,身世悲浮梗,功名类转蓬,他年若得志,威镇泰山东' },
        { name: "玉麒麟卢俊义", leafletImgUrl: `${process.env.PUBLIC_URL}/image/lujunyi.jpg`,poem:'马步军中推第一,天罡数内为尊,上天降下恶星辰,眼珠如点漆,面部似镌银,丈二钢枪无敌手,身骑快马腾云,人材武艺两超群,梁山卢俊义,河北玉麒麟' },
        { name: "双鞭呼延灼", leafletImgUrl: `${process.env.PUBLIC_URL}/image/huyanzhuo.jpg` ,poem:'开国功臣后裔,先朝良将玄孙,家传鞭法最通神,英武熟经战阵,仗剑能探虎穴,弯弓解射雕群,将军出世定乾坤,呼延灼威名大振,堂堂卷地乌云起,铁骑强弓势莫比,皂罗袍穿龙虎躯,乌油甲挂豺狼体,鞭似乌龙搦两条,马如泼墨行千里,七星旗动玄武摇,正按北方壬癸水'},
        { name: "九纹龙史进", leafletImgUrl: `${process.env.PUBLIC_URL}/image/shijing.jpg`,poem:'久在华州城外住,出身原是庄农,学成武艺惯心胸,三尖刀似雪,浑赤马如龙,体挂连环镔铁铠,战袍风飐猩红,雕青镌玉更玲珑,江湖称史进,绰号九纹龙' },
        { name: "花和尚鲁智深", leafletImgUrl: `${process.env.PUBLIC_URL}/image/luzhisheng.jpg`,poem:'平生不修善果,只爱杀人放火,忽地顿开金枷,这里扯断无锁' },
        { name: "浪里白条张顺", leafletImgUrl: `${process.env.PUBLIC_URL}/image/zhangshun.jpg` ,poem:'万里长江东到海,内中一个雄夫,面如傅粉体如酥,上山剜虎目,入水拔龙须,七昼波心能暗伏,水晶宫偷得明珠,翻江搅海勇身躯,人将张顺比,浪里白跳鱼,东去长江万里,内中一个雄夫,面如傅粉体如酥,履水如同平土,胆大能探禹穴,心雄欲摘骊珠,翻波跳浪性如鱼,张顺名传千古'},
        { name: "母夜叉孙二娘", leafletImgUrl: `${process.env.PUBLIC_URL}/image/sunerniang.jpg`,poem:"红裙内斑斓裹肚,黄发边皎洁金钗,钏镯牢笼魔女臂,红衫照映夜叉精" },
        { name: "浪子燕青", leafletImgUrl: `${process.env.PUBLIC_URL}/image/yanqing.jpg`,poem:'燕青心胆坚如铁,外貌风流却异常,花柳曲中逢妓女,洞房深处遇君王,只因姓字题金榜,致使皇恩降玉章,持本御书丹诏去,英雄从此作忠良' },
        { name: "混江龙李俊", leafletImgUrl: `${process.env.PUBLIC_URL}/image/lijun.jpg` ,poem:'家住浔阳江浦上,最称豪杰英雄,眉浓眼大面皮红,髭须垂铁线,语话若铜钟,凛凛身躯长八尺,能挥利剑霜锋,冲波跃浪立奇功,庐州生李俊,绰号混江龙'},
        { name: "美髯公朱仝", leafletImgUrl: `${process.env.PUBLIC_URL}/image/zhutong.jpg`,poem:'义胆忠肝豪杰,胸中武艺精通,超群出众果英雄,弯弓能射虎,提剑可诛龙,一表堂堂神鬼怕,形容凛凛威风,面如重枣色通红,云长重出世,人号美髯公' },
        { name: "青面兽杨志", leafletImgUrl: `${process.env.PUBLIC_URL}/image/yangzhi.jpg` ,poem:'曾向京师为制使,花石纲累受艰难,虹霓气逼斗牛寒,刀能安宇宙,弓可定尘寰,虎体狼腰猿臂健,跨龙驹稳坐雕鞍,英雄声价满梁山,人称青面兽,杨志是军班'},
        { name: "插翅虎雷横", leafletImgUrl: `${process.env.PUBLIC_URL}/image/leiheng.jpg`,poem:'天上罡星临世上,就中一个偏能,都头好汉是雷横,拽拳神臂健,飞脚电光生,江海英雄当武勇,跳墙过涧身轻,豪雄谁敢与相争,山东插翅虎,寰海尽闻名' },
        { name: "谷上蚤时迁", leafletImgUrl: `${process.env.PUBLIC_URL}/image/shiqian.jpg` ,poem:'骨软身躯健,眉浓眼目鲜,形容如怪族,行步似飞仙,夜静穿墙过,更深绕屋悬,偷营高手客,鼓上蚤时迁'},
        { name: "没羽箭张清", leafletImgUrl: `${process.env.PUBLIC_URL}/image/zhangqing.jpg`,poem:'头巾掩映茜红缨,狼腰猿臂体形,锦衣绣袄,袍中微露透深青,雕鞍侧坐,青骢玉勒马轻迎,葵花宝镫,振响熟铜铃,倒拖雉尾,飞走四蹄轻,金环摇动,飘飘玉蟒撒朱缨,锦袋石子,轻轻飞动似流星,不用强弓硬弩,何须打弹飞铃,但着处命须倾,东昌马骑将,没羽箭张清' },
        { name: "一丈青扈三娘", leafletImgUrl: `${process.env.PUBLIC_URL}/image/husanniang.jpg` ,poem:'蝉鬓金钗双压,凤鞋宝镫斜踏,连环铠甲衬红纱,绣带柳腰端跨,霜刀把雄兵乱砍,玉纤将猛将生拿,天然美貌海棠花,一丈青当先出马'},
        { name: "智多星吴用", leafletImgUrl: `${process.env.PUBLIC_URL}/image/wuyong.jpg`,poem:'万卷经书曾读过,平生机巧心灵,六韬三略究来精,胸中藏战将,腹内隐雄兵,谋略敢欺诸葛亮,陈平岂敌才能,略施小计鬼神惊' },
        { name: "神机军师朱武", leafletImgUrl: `${process.env.PUBLIC_URL}/image/zhuwu.jpg` ,poem:'道服裁棕叶,云冠剪鹿皮,脸红双眼俊,面白细髯垂,阵法方诸葛,阴谋胜范蠡,华山谁第一,朱武号神机'},
        { name: "活阎罗阮小七", leafletImgUrl: `${process.env.PUBLIC_URL}/image/ruanxiaoqi.jpg`,poem:'不喜官家不种田,不拜菩萨不羡仙,水底窜出活阎罗,自家顶上有晴天' },
        { name: "双枪将董平", leafletImgUrl: `${process.env.PUBLIC_URL}/image/dongping.jpg` ,poem:'两面旗牌耀日明,锼银铁铠似霜凝,水磨凤翅头盔白,锦绣麒麟战袄青,一对白龙争上下,两条银蟒递飞腾,河东英勇风流将,能使双枪是董平'},
        { name: "神医安道全", leafletImgUrl: `${process.env.PUBLIC_URL}/image/andaoquan.jpg`,poem:'肘后良方有百篇,金针玉刃得师传,重生扁鹊应难比,万里传名安道全' },
        { name: "拼命三郎石秀", leafletImgUrl: `${process.env.PUBLIC_URL}/image/shixiu.jpg` ,poem:'匣里龙泉争欲出,只因世有不平人,旁观能辨非和是,相助安知疏与亲, 身似山中猛虎,性如火上浇油,心雄胆大有机谋,到处逢人搭救,全仗一条杆棒,只凭两个拳头,掀天声价满皇州,拚命三郎石秀'},
        { name: "没遮拦穆弘", leafletImgUrl: `${process.env.PUBLIC_URL}/image/muhong.jpg`,poem:'面似银盆身似玉,头圆眼细眉单,威风凛凛逼人寒,灵官离斗府,佑圣下天关,武艺高强心胆大,阵前不肯空还,攻城野战夺旗幡,穆弘真壮士,人号没遮拦' },
        { name: "大刀关胜", leafletImgUrl: `${process.env.PUBLIC_URL}/image/guansheng.jpg` ,poem:'汉国功臣苗裔,三分良将玄孙,绣旗飘挂动天兵,金甲绿袍相称,赤兔马腾腾紫雾,青龙刀凛凛寒冰,蒲东郡内产英雄,义勇大刀关胜'},
        { name: "神行太保戴宗", leafletImgUrl: `${process.env.PUBLIC_URL}/image/daizong.jpg`,poem:'面阔唇方神眼突,瘦长清秀人材,皂纱巾畔翠花开,黄旗书令字,红串映宣牌,两只脚行千里路,罗衫常惹尘埃,程途八百去还来,神行真太保,院长戴宗才' },
        { name: "混世魔王樊瑞", leafletImgUrl: `${process.env.PUBLIC_URL}/image/fanrui.jpg` ,poem:'头散青丝细发,身穿绒绣皂袍,连环铁甲晃寒霄,惯使铜锤更妙,好似北方真武,世间伏怪除妖,云游江海把名标,混世魔王绰号'},
        { name: "急先锋索超", leafletImgUrl: `${process.env.PUBLIC_URL}/image/suochao.jpg`,poem:'生居河北最英雄,累与朝廷立大功,双凤袍笼银叶铠,飞鱼袋插铁胎弓,勇如袁达安齐国,壮若灵神劈华峰,马上横担金蘸斧,索超名号急先锋, 虎坐雕鞍胆气昂,弯弓插箭鬼神慌,朱缨银盖遮刀面,绒缕金铃贴马旁,盔顶穰花红错落,甲穿柳叶翠遮藏,皂旗青甲烟尘内,东北天山守艮方' },
        { name: "入云龙公孙胜", leafletImgUrl: `${process.env.PUBLIC_URL}/image/gongsunsheng.jpg` ,poem:'人言诸葛借东风,尚逊公孙三分功, 野鹤闲云情不俗,道风仙骨气如虹, 攻城掠寨松文剑,呼雨兴风入云龙, 功绩堪居身却退,蓟州乡下隐仙峒'}
    // Add more card data here if needed
];

function CardBack({ onClick }) {
    const [randomCard] = useState(cards[Math.floor(Math.random() * cards.length)]); // Randomly select a card

    return (
        <div 
            className="card-back" 
            style={{ 
                backgroundImage: `url(${randomCard.leafletImgUrl})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }} 
            onClick={onClick}
        >
            <h3>Click to Analyze</h3>
        </div>
    );
}

export default CardBack;
