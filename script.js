// ==========================================
// 1. お題データ
// ==========================================
const WORD_LIST = {
  1: [
    { kanji: "雨", kana: "あめ" },
    { kanji: "電話", kana: "でんわ" },
    { kanji: "いちご", kana: "いちご" },
    { kanji: "段ボール", kana: "だんぼーる" },
    { kanji: "唐揚げ", kana: "からあげ" },
    { kanji: "海", kana: "うみ" },
    { kanji: "ご飯", kana: "ごはん" },
    { kanji: "ラベルレス", kana: "らべるれす" },
    { kanji: "そぼろ丼", kana: "そぼろどん" },
    { kanji: "キリン", kana: "きりん" },
    { kanji: "親子丼", kana: "おやこどん" },
    { kanji: "洞窟", kana: "どうくつ" },
    { kanji: "コイン", kana: "こいん" },
    { kanji: "さかな", kana: "さかな" },
    { kanji: "フランス", kana: "ふらんす" },
    { kanji: "すいか", kana: "すいか" },
    { kanji: "熊本県", kana: "くまもとけん" },
    { kanji: "空", kana: "そら" },
    { kanji: "タコ", kana: "たこ" },
    { kanji: "地図", kana: "ちず" },
    { kanji: "机", kana: "つくえ" },
    { kanji: "手紙", kana: "てがみ" },
    { kanji: "時計", kana: "とけい" },
    { kanji: "ナス", kana: "なす" },
    { kanji: "虹", kana: "にじ" },
    { kanji: "ピアノ", kana: "ぴあの" },
    { kanji: "ネコ", kana: "ねこ" },
    { kanji: "のり", kana: "のり" },
    { kanji: "花", kana: "はな" },
    { kanji: "ピーマン", kana: "ぴーまん" },
    { kanji: "船", kana: "ふね" },
    { kanji: "ヘビ", kana: "へび" },
    { kanji: "本", kana: "ほん" },
    { kanji: "みかん", kana: "みかん" },
    { kanji: "虫", kana: "むし" },
    { kanji: "メガネ", kana: "めがね" },
    { kanji: "もも", kana: "もも" },
    { kanji: "山", kana: "やま" },
    { kanji: "雪", kana: "ゆき" },
    { kanji: "夜", kana: "よる" },
    { kanji: "ライオン", kana: "らいおん" },
    { kanji: "リンゴ", kana: "りんご" },
    { kanji: "ルビー", kana: "るびー" },
    { kanji: "レモン", kana: "れもん" },
    { kanji: "ロウソク", kana: "ろうそく" },
    { kanji: "ワニ", kana: "わに" },
    { kanji: "担任", kana: "たんにん" },
    { kanji: "木星", kana: "もくせい" },
  ],
  2: [
    { kanji: "一次関数", kana: "いちじかんすう" },
    { kanji: "位置エネルギー", kana: "いちえねるぎー" },
    { kanji: "段階的に", kana: "だんかいてきに" },
    { kanji: "元素記号", kana: "げんそきごう" },
    { kanji: "電話番号", kana: "でんわばんごう" },
    { kanji: "月と太陽", kana: "つきとたいよう" },
    { kanji: "化学変化", kana: "かがくへんか" },
    { kanji: "基本的人権", kana: "きほんてきじんけん" },
    { kanji: "空気抵抗", kana: "くうきていこう" },
    { kanji: "経済活動", kana: "けいざいかつどう" },
    { kanji: "公害問題", kana: "こうがいもんだい" },
    { kanji: "エビフライ", kana: "えびふらい" },
    { kanji: "自然遺産", kana: "しぜんいさん" },
    { kanji: "水溶液", kana: "すいようえき" },
    { kanji: "世界遺産", kana: "せかいいさん" },
    { kanji: "相対性理論", kana: "そうたいせいりろん" },
    { kanji: "期末テスト", kana: "きまつてすと" },
    { kanji: "レベル上げ", kana: "れべるあげ" },
    { kanji: "定期テスト", kana: "ていきてすと" },
    { kanji: "天の川銀河", kana: "あまのがわぎんが" },
    { kanji: "第二次世界大戦", kana: "だいにじせかいたいせん" },
    { kanji: "発電設備", kana: "はつでんせつび" },
    { kanji: "平均点", kana: "へいきんてん" },
    { kanji: "プレイ時間", kana: "ぷれいじかん" },
    { kanji: "貿易赤字", kana: "ぼうえきあかじ" },
    { kanji: "平安時代", kana: "へいあんじだい" },
    { kanji: "見取り図", kana: "みとりず" },
    { kanji: "ゲーム開発部", kana: "げーむかいはつぶ" },
    { kanji: "マスタードソース", kana: "ますたーどそーす" },
    { kanji: "パンチングマシーン", kana: "ぱんちんぐましーん" },
    { kanji: "理科室", kana: "りかしつ" },
    { kanji: "学生時代", kana: "がくせいじだい" },
    { kanji: "連立方程式", kana: "れんりつほうていしき" },
    { kanji: "二次方程式", kana: "にじほうていしき" },
    { kanji: "ヘリウムガス", kana: "へりうむがす" },
    { kanji: "水酸化ナトリウム", kana: "すいさんかなとりうむ" },
    { kanji: "冥王星", kana: "めいおうせい" },
    { kanji: "水金地火木土天海", kana: "すいきんちかもくどてんかい" },
  ],
  3: [
    { kanji: "春はあけぼの", kana: "はるはあけぼの" },
    { kanji: "源氏物語の感想", kana: "げんじものがたりのかんそう" },
    { kanji: "トウモロコシを二等分", kana: "とうもろこしをにとうぶん" },
    { kanji: "大化の改新が行われる", kana: "たいかのかいしんがおこなわれる" },
    { kanji: "日本国憲法を公布する", kana: "にほんこくけんぽうをこうふする" },
    { kanji: "三大義務を守る", kana: "さんだいぎむをまもる" },
    { kanji: "地方自治の本旨", kana: "ちほうじちのほんし" },
    { kanji: "内閣総理大臣を選別する", kana: "ないかくそうりだいじんをせんべつする" },
    { kanji: "水は水素と酸素に分かれる", kana: "みずはすいそとさんそにわかれる" },
    { kanji: "光合成により酸素ができる", kana: "こうごうせいによりさんそができる" },
    { kanji: "最近台風が多いです", kana: "さいきんたいふうがおおいです" },
    { kanji: "低気圧なのでできません", kana: "ていきあつなのでできません" },
    { kanji: "正方形の辺の長さは等しい", kana: "せいほうけいのへんのながさはひとしい" },
    { kanji: "連立方程式を解く", kana: "れんりつほうていしきをとく" },
    { kanji: "一次関数のグラフをかく", kana: "いちじかんすうのぐらふをかく" },
    { kanji: "データの活用を学ぶ", kana: "でーたのかつようをまなぶ" },
    { kanji: "アルゴリズムを理解する", kana: "あるごりずむをりかいする" }
  ],
  4: [
    { kanji: "下段中段僕ジダン", kana: "げだんちゅうだんぼくじだん" },
    { kanji: "直線的", kana: "ちょくせんてき" },
    { kanji: "段階的に", kana: "だんかいてきに" },
    { kanji: "電話番号", kana: "でんわばんごう" },
    { kanji: "小学校", kana: "しょうがっこう" },
    { kanji: "小学生", kana: "しょうがくせい" },
    { kanji: "出身校", kana: "しゅっしんこう" },
    { kanji: "出版社", kana: "しゅっぱんしゃ" },
    { kanji: "ばかめ、そっちは残像だ", kana: "ばかめ、そっちはざんぞうだ" },
    { kanji: "ばかめ、そっちは本体だ", kana: "ばかめ、そっちはほんたいだ" },
    { kanji: "哨戒班", kana: "しょうかいはん" },
    { kanji: "塩を少々", kana: "しおをしょうしょう" },
    { kanji: "良薬口に苦し", kana: "りょうやくくちににがし" },
    { kanji: "境界線", kana: "きょうかいせん" },
    { kanji: "超常現象", kana: "ちょうじょうげんしょう" },
    { kanji: "敗者復活戦", kana: "はいしゃふっかつせん" },
    { kanji: "金星", kana: "きんせい" },
    { kanji: "原動力", kana: "げんどうりょく" },
    { kanji: "同調圧力", kana: "どうちょうあつりょく" },
    { kanji: "海王星", kana: "かいおうせい" },
    { kanji: "天王星", kana: "てんのうせい" },
    { kanji: "社会人", kana: "しゃかいじん" },
    { kanji: "太陽系", kana: "たいようけい" },
    { kanji: "恒星", kana: "こうせい" },
    { kanji: "こんにちわんこそば", kana: "こんにちわんこそば" },
    { kanji: "少々", kana: "しょうしょう" },
    { kanji: "幼少期", kana: "ようしょうき" },
    { kanji: "装飾品", kana: "そうしょくひん" },
    { kanji: "取り返しがつかない", kana: "とりかえしがつかない" },
    { kanji: "廃品回収", kana: "はいひんかいしゅう" },
    { kanji: "ドントマインド", kana: "どんとまいんど" },
    { kanji: "先手必勝", kana: "せんてひっしょう" },
    { kanji: "衛星放送", kana: "えいせいほうそう" },
    { kanji: "集中砲火", kana: "しゅうちゅうほうか" },
    { kanji: "もう恋なんてしないなんて", kana: "もうこいなんてしないなんて" },
    { kanji: "ありのままの自分", kana: "ありのままのじぶん" },
    { kanji: "延長戦", kana: "えんちょうせん" },
    { kanji: "想像力", kana: "そうぞうりょく" },
    { kanji: "競技場", kana: "きょうぎじょう" },
    { kanji: "地震雷火事親父", kana: "じしんかみなりかじおやじ" },
    { kanji: "大阪城", kana: "おおさかじょう" },
    { kanji: "コンタクトレンズ", kana: "こんたくとれんず" },
    { kanji: "どうしようもない", kana: "どうしようもない" },
    { kanji: "客観的", kana: "きゃっかんてき" },
    { kanji: "授業料", kana: "じゅぎょうりょう" },
    { kanji: "判断を下す", kana: "はんだんをくだす" },
    { kanji: "共通点", kana: "きょうつうてん" },
    { kanji: "アドレナリン爆発", kana: "あどれなりんばくはつ" },
    { kanji: "関連付ける", kana: "かんれんづける" },
    { kanji: "僕のトラウマバレンタイン", kana: "ぼくのとらうまばれんたいん" },
    { kanji: "レンタル料", kana: "れんたるりょう" },
    { kanji: "想定の範囲内です", kana: "そうていのはんいないです" },
    { kanji: "だってもクソもあるか", kana: "だってもくそもあるか" },
    { kanji: "客観性", kana: "きゃっかんせい" },
    { kanji: "確定申告", kana: "かくていしんこく" },
    { kanji: "代表的", kana: "だいひょうてき" },
    { kanji: "モモンガモンガ", kana: "ももんがもんが" },
    { kanji: "バラモン教", kana: "ばらもんきょう" },
    { kanji: "無人コンビニ化計画", kana: "むじんこんびにかけいかく" },
    { kanji: "横断歩道", kana: "おうだんほどう" },
    { kanji: "殴打歩道", kana: "おうだほどう" },
    { kanji: "面接試験", kana: "めんせつしけん" },
    { kanji: "緊張感", kana: "きんちょうかん" },
    { kanji: "臨場感", kana: "りんじょうかん" },
    { kanji: "答案用紙", kana: "とうあんようし" },
    { kanji: "低年齢化", kana: "ていねんれいか" },
    { kanji: "学生証", kana: "がくせいしょう" },
    { kanji: "来週宇宙に旅行にって来るわ", kana: "らいしゅううちゅうにりょこうにいってくるわ" },
    { kanji: "才能は努力で買うもの", kana: "さいのうはどりょくでかうもの" },
    { kanji: "スピード違反", kana: "すぴーどいはん" },
    { kanji: "健康診断証明書", kana: "けんこうしんだんしょうめいしょ" },
    { kanji: "決勝戦", kana: "けっしょうせん" },
    { kanji: "今日から私は", kana: "きょうからわたしは" },
    { kanji: "大学院生", kana: "だいがくいんせい" }, 
    { kanji: "相談に乗る", kana: "そうだんにのる" },
    { kanji: "トイレの神様", kana: "といれのかみさま" },
    { kanji: "二酸化炭素", kana: "にさんかたんそ" },
    { kanji: "入場料", kana: "にゅうじょうりょう" },
    { kanji: "離婚と転職はお気軽に", kana: "りこんとてんしょくはおきがるに" },
    { kanji: "消化不良", kana: "しょうかふりょう" },
    { kanji: "詳細調査", kana: "しょうさいちょうさ" },
    { kanji: "少子化対策", kana: "しょうしかたいさく" },
    { kanji: "証明終了", kana: "しょうめいしゅうりょう" },
    { kanji: "収入減少", kana: "しゅうにゅうげんしょう" },
    { kanji: "証明完了", kana: "しょうめいかんりょう" },
    { kanji: "証明書", kana: "しょうめいしょ" },
    { kanji: "商売繫盛", kana: "しょうばいはんじょう" },
    { kanji: "波乱万丈", kana: "はらんばんじょう" },
    { kanji: "勝利宣言", kana: "しょうりせんげん" },
    { kanji: "昭和時代", kana: "しょうわじだい" },
    { kanji: "正面衝突", kana: "しょうめんしょうとつ" },
    { kanji: "消火活動", kana: "しょうかかつどう" },
    { kanji: "衝撃映像", kana: "しょうげきえいぞう" },
    { kanji: "料理教室", kana: "りょうりきょうしつ" },
    { kanji: "体調不良", kana: "たいちょうふりょう" },
    { kanji: "町内会会長", kana: "ちょうないかいかいちょう" },
    { kanji: "運動場", kana: "うんどうじょう" },
    { kanji: "招待状", kana: "しょうたいじょう" },
    { kanji: "招待券", kana: "しょうたいけん" },
	{ kanji: "フレミングの法則", kana: "ふれみんぐのほうそく" },
	{ kanji: "総理大臣", kana: "そうりだいじん" },
	{ kanji: "恋愛感情", kana: "れんあいかんじょう" },
	{ kanji: "雨天決行", kana: "うてんけっこう" },
	{ kanji: "感情論", kana: "かんじょうろん" },
	{ kanji: "超能力者", kana: "ちょうのうりょくしゃ" },
	{ kanji: "質量保存の法則が法則でなくなった", kana: "しつりょうほぞんのほうそくがほうそくでなくなった" },
	{ kanji: "校長早朝盲腸膨張", kana: "こうちょうそうちょうもうちょうぼうちょう" },
	{ kanji: "駐輪場", kana: "ちゅうりんじょう" },
	{ kanji: "駐車場", kana: "ちゅうしゃじょう" },
	{ kanji: "表彰状", kana: "ひょうしょうじょう" },
	{ kanji: "表彰台", kana: "ひょうしょうだい" },
	{ kanji: "結婚は選択肢の一つでしかない", kana: "けっこんはせんたくしのひとつでしかない" },
	{ kanji: "羽がなくてもはばたけ", kana: "はねがなくてもはばたけ" },
	{ kanji: "少林寺拳法", kana: "しょうりんじけんぽう" },
	{ kanji: "長文の文章募集中です", kana: "ちょうぶんのぶんしょうぼしゅうちゅうです" },
	{ kanji: "延長線上", kana: "えんちょうせんじょう" },
	{ kanji: "気が進まない", kana: "きがすすまない" },
	{ kanji: "起承転結", kana: "きしょうてんけつ" },
	{ kanji: "脊髄反射", kana: "せきずいはんしゃ" },
	{ kanji: "自称金欠には気を付けて", kana: "じしょうきんけつにはきをつけて" },
	{ kanji: "あこがれの異世界転生", kana: "あこがれのいせかいてんせい" },
	{ kanji: "創造は経験から生まれる", kana: "そうぞうはけいけんからうまれる" },
	{ kanji: "少々表彰する日本の象徴", kana: "しょうしょうひょうしょうするにほんのしょうちょう" },
	{ kanji: "道場に登場して表彰台に立つ", kana: "どうじょうにとうじょうしてひょうしょうだいにたつ" },
	{ kanji: "自称金欠の総理大臣", kana: "じしょうきんけつのそうりだいじん" },
	{ kanji: "延長戦は気が進まない", kana: "えんちょうせんはきがすすまない" },
	{ kanji: "表彰されるのに少々及ばない", kana: "ひょうしょうされるのにしょうしょうおよばない" },
	{ kanji: "感情論の総理大臣", kana: "かんじょうろんのそうりだいじん" },
	{ kanji: "超能力を少々使用できる", kana: "ちょうのうりょくをしょうしょうしようできる" },
	{ kanji: "遠足を雨天決行", kana: "えんそくをうてんけっこう" },
	{ kanji: "恋愛感情は文章で扱えない", kana: "れんあいかんじょうはぶんしょうであつかえない" },
	{ kanji: "恋愛感情を使用した文章募集中", kana: "れんあいかんじょうをしようしたぶんしょうぼしゅうちゅう" },
	{ kanji: "長距離のラリアット", kana: "ちょうきょりのらりあっと" },
	{ kanji: "文章がネタ切れです", kana: "ぶんしょうがねたぎれです" },
	{ kanji: "タイピンガーｚの文章をパクります", kana: "たいぴんがーｚのぶんしょうをぱくります" },
	{ kanji: "錠剤を使用する際の注意書き", kana: "じょうざいをしようするさいのちゅういがき" },
	{ kanji: "日本の選手ファイト", kana: "にほんのせんしゅふぁいと" },
	{ kanji: "円周率は中学校ではπです", kana: "えんしゅうりつはちゅうがっこうではぱいです" },
	{ kanji: "曲の歌詞を文章にします", kana: "きょくのかしをぶんしょうにします" },
	{ kanji: "明け方の夢", kana: "あけがたのゆめ" },
	{ kanji: "夏が来ないままの街を今", kana: "なつがこないままのまちをいま" },
	{ kanji: "アスノヨゾラ哨戒班", kana: "あすのよぞらしょうかいはん" },
	{ kanji: "バケモノの長さの文章", kana: "ばけもののながさのぶんしょう" },
	{ kanji: "超長文の文章正確に打ち切ります", kana: "ちょうちょうぶんのぶんしょうをせいかくにうちきります" },
	{ kanji: "木星は地球の救世主", kana: "もくせいはちきゅうのきゅうせいしゅ" },
	{ kanji: "思想強めな宗教勧誘", kana: "しそうつよめなしゅうきょうかんゆう" },
	{ kanji: "一球入魂野球部", kana: "いっきゅうにゅうこんやきゅうぶ" },
	{ kanji: "東京海峡許可局局長", kana: "とうきょうかいきょうきょかきょくきょくちょう" },
	{ kanji: "言い訳していいわけ", kana: "いいわけしていいわけ" },
	{ kanji: "鍵盤譜面は嫌いです", kana: "けんばんふめんはきらいです" },
	{ kanji: "グランドピアノは重いです", kana: "ぐらんどぴあのはおもいです" },
	{ kanji: "吹奏楽部は楽器が重い", kana: "すいそうがくぶはがっきがおもい" },
	{ kanji: "水泳部は筋トレをします", kana: "すいえいぶはきんとれをします" },
	{ kanji: "タイピングには腱鞘炎が付き物です", kana: "たいぴんぐにはけんしょうえんがつきものです" },
	{ kanji: "少年院にはいかないようにします", kana: "しょうねんいんにはいかないようにします" },
	{ kanji: "昨日の筋トレは今日の筋肉痛", kana: "きのうのきんとれはきょうのきんにくつう" },
	{ kanji: "超新星爆発は熱いです", kana: "ちょうしんせいばくはつはあついです" },
	{ kanji: "クイヤ、あー害獣ののクイヤか", kana: "くいや、あーがいじゅうのくいやか" },
	{ kanji: "クジラは哺乳類ですが蝶々は何類ですか", kana: "くじらはほにゅるいですがちょうちょうはなにるいですか" },
	{ kanji: "ちょっと何言ってるのか分かりません", kana: "ちょっとなにいってるのかわかりません" },
	{ kanji: "英語を習得するために勉強をしました", kana: "えいごをしゅうとくするためにべんきょうをしました" },
	{ kanji: "人間三代欲求の一角睡眠欲の亡者", kana: "にんげんさんだいよっきゅうのいっかくすいみんよくのもうじゃ" },
	{ kanji: "中学生はテストが難しいです", kana: "ちゅうがくせいはてすとがむずかしいです" },
	{ kanji: "全国共通テスト上位に乗りました", kana: "ぜんこくきょうつうてすとじょういにのりました" },
	{ kanji: "ヨガ教室に通っています", kana: "よがきょうしつにかよっています" },
	{ kanji: "わがままはタダです", kana: "わがままはただです" },
	{ kanji: "今からでも遅くない、タイピングを始めましょう", kana: "いまからでもおそくない、たいぴんぐをはじめましょう" },
	{ kanji: "タイピングが本当に速い人は文章は関係ありません", kana: "たいぴんぐがほんとうにはやいひとはぶんしょうはかんけいありません" },
	{ kanji: "あなたは努力の天才です、なので勉強してください", kana: "あなたはどりょくのてんさいです、なのでべんきょうしてください" },
	{ kanji: "何やってるんですか、勉強してください", kana: "なにやってるんですか、べんきょうしてください" },
	{ kanji: "邪魔するのが僕の使命です", kana: "じゃまするのがぼくのしめいです" },
	{ kanji: "てんしかあくまか", kana: "てんしかあくまか" },
	{ kanji: "映画のちいかわは感動できる", kana: "えいがのちいかわはかんどうできる" },
	{ kanji: "中学生から部活動を始めます", kana: "ちゅうがくせいからぶかつどうをはじめます" },
	{ kanji: "中学生", kana: "ちゅうがくせい" },
	{ kanji: "私立中学の学費は高い", kana: "しりつちゅうがくのがくひはたかい" },
	{ kanji: "地雷原で立ち止まる", kana: "じらいげんでたちどまる" },
	{ kanji: "裁判では感情論に任せてはいけません", kana: "さいばんではかんじょうろんにまかせてはいけません" },
	{ kanji: "君と防空壕で呼吸する", kana: "きみとぼうくうごうでこきゅうする" },
	{ kanji: "上腕二頭筋を鍛えたいです", kana: "じょうわんにとうきんをきたえたいです" },
	{ kanji: "海外のフィジギフはすごい", kana: "かいがいのふぃじぎふはすごい" },
	{ kanji: "携帯電話はドパガキ量産機以外の他でもない", kana: "けいたいでんわはどぱがきりょうさんきいがいのほかでもない" },
	{ kanji: "サイダーを飲んで顔が歪む", kana: "さいだーをのんでかおがゆがむ" },
	{ kanji: "炭酸飲料は苦手です", kana: "たんさんいんりょうはにがてです" },
	{ kanji: "この文章の半分以上が徹夜の際に作っています", kana: "このぶんしょうのはんぶんいじょうがてつやのさいにつくっています" },
	{ kanji: "めちゃくちゃ長い文章のアイデアをだしてくれたっていい", kana: "めちゃくちゃながいぶんしょうのあいであをだしてくれたっていい" },
	{ kanji: "リンスとコンディショナーの違いが分からない", kana: "りんすとこんでぃしょなーのちがいがわからない" },
	{ kanji: "高級レストランに行く", kana: "こうきゅうれすとらんにいく" },
	{ kanji: "この文章の半分が本当で半分が噓です", kana: "このぶんしょうのはんぶんがほんとうではんぶんがうそです" },
	{ kanji: "港区女子の模範解答", kana: "みなとくじょしのもはんかいとう" },
	{ kanji: "夜明けと蛍", kana: "よあけとほたる" },
	{ kanji: "染料を使って絵を描きます", kana: "せんりょうをつかってえをかきます" },
	{ kanji: "コンビニエンスストア", kana: "こんびにえんすすとあ" },
	{ kanji: "エバーレディーシャープペンシル", kana: "えばーれでぃーしゃーぷぺんしる" },
	{ kanji: "勉強をすると将来が安泰です", kana: "べんきょうをするとしょうらいがあんたいです" },
	{ kanji: "自称なら何とでも言える", kana: "じしょうならなんとでもいえる" },
	{ kanji: "握力計を壊してしまいました", kana: "あくりょくけいをこわしてしまいました" },
	{ kanji: "懸垂をたくさんやっています", kana: "けんすいをたくさんやっています" },
	{ kanji: "ピアノにハマっています", kana: "ぴあのにはまっています" },
	{ kanji: "ピアノが弾けるようになりました", kana: "ぴあのがひけるようになりました" },
	{ kanji: "団子より花", kana: "だんごよりはな" },
	{ kanji: "自称段ボール", kana: "じしょうだんぼーる" },
	{ kanji: "発想力を高める", kana: "はっそうりょくをたかめる" },
	{ kanji: "電力会社に長く務める", kana: "でんりょくがいしゃにながくつとめる" },
	{ kanji: "モチベーションを上げる", kana: "もちべーしょんをあげる" },
	{ kanji: "食中毒で病院に入院する", kana: "しょくちゅうどくでびょういんににゅういんする" },
	{ kanji: "化学調味料は体に悪いのか", kana: "かがくちょうみりょうはからだにわるいのか" },
    { kanji: "創造力", kana: "そうぞうりょく" }
  ]
};

// かな→ローマ字変換テーブル
const ROMA_MAP = {
  'あ':['a'], 'い':['i'], 'う':['u'], 'え':['e'], 'お':['o'],
  'か':['ka'], 'き':['ki'], 'く':['ku'], 'け':['ke'], 'こ':['ko'],
  'さ':['sa'], 'し':['si','shi'], 'す':['su'], 'せ':['se'], 'そ':['so'],
  'た':['ta'], 'ち':['ti','chi'], 'つ':['tu','tsu'], 'て':['te'], 'と':['to'],
  'な':['na'], 'に':['ni'], 'ぬ':['nu'], 'ね':['ne'], 'の':['no'],
  'は':['ha'], 'ひ':['hi'], 'ふ':['hu','fu'], 'へ':['he'], 'ほ':['ho'],
  'ま':['ma'], 'み':['mi'], 'む':['mu'], 'め':['me'], 'も':['mo'],
  'や':['ya'], 'ゆ':['yu'], 'よ':['yo'],
  'ら':['ra'], 'り':['ri'], 'る':['ru'], 'れ':['re'], 'ろ':['ro'],
  'わ':['wa'], 'を':['wo'], 'ん':['nn','n','xn'],
  'が':['ga'], 'ぎ':['gi'], 'ぐ':['gu'], 'げ':['ge'], 'ご':['go'],
  'ざ':['za'], 'じ':['zi','ji'], 'ず':['zu'], 'ぜ':['ze'], 'ぞ':['zo'],
  'だ':['da'], 'ぢ':['di'], 'づ':['du'], 'で':['de'], 'ど':['do'],
  'ば':['ba'], 'び':['bi'], 'ぶ':['bu'], 'べ':['be'], 'ぼ':['bo'],
  'ぱ':['pa'], 'ぴ':['pi'], 'ぷ':['pu'], 'ぺ':['pe'], 'ぽ':['po'],
  'ぁ':['la','xa'], 'ぃ':['li','xi'], 'ぅ':['lu','xu'], 'ぇ':['le','xe'], 'ぉ':['lo','xo'],
  'ゃ':['lya','xya'], 'ゅ':['lyu','xyu'], 'ょ':['lyo','xyo'],
  'っ':['ltu','xtu','ltsu'], 'ゎ':['lwa','xwa'],
  'きゃ':['kya'], 'きゅ':['kyu'], 'きょ':['kyo'],
  'しゃ':['sya','sha'], 'しゅ':['syu','shu'], 'しょ':['syo','sho'], 'しぇ':['sye','she'],
  'ちゃ':['tya','cha'], 'ちゅ':['tyu','chu'], 'ちょ':['tyo','cho'], 'ちぇ':['tye','che'],
  'にゃ':['nya'], 'にゅ':['nyu'], 'にょ':['nyo'],
  'ひゃ':['hya'], 'ひゅ':['hyu'], 'ひょ':['hyo'],
  'みゃ':['mya'], 'みゅ':['myu'], 'みょ':['myo'],
  'りゃ':['rya'], 'りゅ':['ryu'], 'りょ':['ryo'],
  'ぎゃ':['gya'], 'ぎゅ':['gyu'], 'ぎょ':['gyo'],
  'じゃ':['zya','ja'], 'じゅ':['zyu','ju'], 'じょ':['zyo','jo'], 'じぇ':['zye','je'],
  'びゃ':['bya'], 'びゅ':['byu'], 'びょ':['byo'], 'ぴゃ':['pya'], 'ぴゅ':['pyu'], 'ぴょ':['pyo'],
  'ふぁ':['fa'], 'ふぃ':['fi'], 'ふぇ':['fe'], 'ふぉ':['fo'],
  'てぃ':['thi'], 'とぅ':['thu'], 'どぃ':['dhi'], 'どぅ':['dhu'],
  'ヴぁ':['va'], 'ヴぃ':['vi'], 'ヴ':['vu'], 'ヴぇ':['ve'], 'ヴぉ':['vo'],
  'ー':['-'], '、': [','], '。': ['.']
};

// ==========================================
// 2. 変数管理
// ==========================================
let gameMode = 'ta'; // 'ta': タイムアタック, 'cpu': CPU対戦
let gameTime = 30;
let timerInterval = null;
let gameStartTime = 0; 
let score = 0;
let totalTypedCount = 0;
let missCount = 0;

// CPU対戦用
let cpuScore = 0;
let cpuInterval = null;
let meterValue = 50; 

let remainingWords = []; 
let nextItem = null;
let typedRoma = ""; 

let currentKanaStr = "";       
let romaPatterns = [];         
let currentPatternIndex = 0;   
let currentMatchedInput = "";  

// レベルに応じた目標値（KPMまたは打鍵数）を取得
function getTargetCount(level, mode = gameMode) {
  const lvl = Number(level);
  if (mode === 'ta') {
    return lvl === 4 ? 200 : lvl * 50;
  } else {
    return lvl === 21 ? 1100 : lvl * 50;
  }
}

// 解放された最高レベルを取得・保存する処理（CPU対戦用）
function getUnlockedLevel(mode) {
  const saved = localStorage.getItem(`kotou_unlocked_lvl_${mode}`);
  return saved ? Number(saved) : 1;
}

function unlockNextLevel(mode, clearedLevel) {
  if (mode === 'ta') return;
  const currentUnlocked = getUnlockedLevel(mode);
  const nextLvl = Number(clearedLevel) + 1;
  if (nextLvl > currentUnlocked && nextLvl <= 21) {
    localStorage.setItem(`kotou_unlocked_lvl_${mode}`, nextLvl);
  }
}

// ==========================================
// 3. ローマ字解析ロジック
// ==========================================
function parseKanaToRomaPatterns(kanaStr) {
  const patterns = [];
  let i = 0;

  while (i < kanaStr.length) {
    const char1 = kanaStr[i];
    const char2 = kanaStr[i + 1] || "";

    const combo2 = char1 + char2;
    if (char2 && ROMA_MAP[combo2]) {
      patterns.push([...ROMA_MAP[combo2]]);
      i += 2;
      continue;
    }

    if (char1 === 'っ' && char2) {
      const comboNext2 = char2 + (kanaStr[i + 2] || "");
      let nextCandidates = [];

      if (ROMA_MAP[comboNext2]) {
        nextCandidates = ROMA_MAP[comboNext2];
      } else if (ROMA_MAP[char2]) {
        nextCandidates = ROMA_MAP[char2];
      }

      const sokuonCandidates = [];
      nextCandidates.forEach(cand => {
        const firstLetter = cand.charAt(0);
        if (firstLetter.match(/[a-z]/i) && !"aeiou".includes(firstLetter)) {
          sokuonCandidates.push(firstLetter);
        }
      });

      sokuonCandidates.push(...ROMA_MAP['っ']);
      patterns.push([...new Set(sokuonCandidates)]);
      i += 1;
      continue;
    }

    if (ROMA_MAP[char1]) {
      patterns.push([...ROMA_MAP[char1]]);
    } else {
      patterns.push([char1]);
    }
    i += 1;
  }

  return patterns;
}

// ==========================================
// 4. ランキング機能 (Local Storage)
// ==========================================
function getScores(level) {
  const dataStr = localStorage.getItem(`kotou_typing_scores_lvl_${level}_${gameMode}`);
  return dataStr ? JSON.parse(dataStr) : [];
}

function saveScore(level, name, kpm) {
  let scores = getScores(level);
  scores.push({ name: name, kpm: kpm, date: new Date().toLocaleDateString() });
  scores.sort((a, b) => b.kpm - a.kpm);
  scores = scores.slice(0, 5);
  localStorage.setItem(`kotou_typing_scores_lvl_${level}_${gameMode}`, JSON.stringify(scores));
}

function updateRankingDisplay() {
  const levelSelect = document.getElementById('level-select');
  const level = levelSelect ? levelSelect.value : "1";
  const scores = getScores(level);
  const rankingList = document.getElementById('ranking-list');

  if (rankingList) {
    if (scores.length === 0) {
      rankingList.innerHTML = '<div class="no-data">記録がまだありません</div>';
    } else {
      rankingList.innerHTML = scores.slice(0, 3).map((item, index) => `
        <div class="ranking-item">
          <span class="rank-num">${index + 1}位</span>
          <span class="rank-name">${item.name}</span>
          <span class="rank-kpm">${item.kpm} KPM</span>
        </div>
      `).join('');
    }
  }
}

// ==========================================
// 5. 表示・ゲーム進行ロジック
// ==========================================
function updateMeterDisplay() {
  const fill = document.getElementById('meter-bar-fill');
  if (fill) {
    fill.style.width = `${meterValue}%`;
  }
}

function pushMeter(amount) {
  meterValue = Math.min(100, Math.max(0, meterValue + amount));
  updateMeterDisplay();

  if (meterValue >= 100 || meterValue <= 0) {
    endGame();
  }
}

function updateDisplay() {
  const untypedTextDisplay = document.getElementById('untyped-text');
  if (!untypedTextDisplay) return;

  let remainingText = "";
  const currentCandidates = romaPatterns[currentPatternIndex];
  if (currentCandidates) {
    const matchedCandidate = currentCandidates.find(p => p.startsWith(currentMatchedInput)) || currentCandidates[0];
    remainingText += matchedCandidate.substring(currentMatchedInput.length);
  }

  for (let i = currentPatternIndex + 1; i < romaPatterns.length; i++) {
    remainingText += romaPatterns[i][0];
  }

  untypedTextDisplay.textContent = remainingText;
}

function nextWord() {
  const levelSelect = document.getElementById('level-select');
  const rubyKanji = document.getElementById('ruby-kanji');
  const rubyKana = document.getElementById('ruby-kana');
  const typedTextDisplay = document.getElementById('typed-text');
  
  let levelKey = levelSelect ? levelSelect.value : "1";
  if (gameMode === 'cpu') {
    levelKey = "4"; 
  }

  const currentItem = nextItem;

  if (!WORD_LIST[levelKey] || remainingWords.length === 0) {
    remainingWords = [...(WORD_LIST[levelKey] || WORD_LIST[4])];
  }
  const randomIndex = Math.floor(Math.random() * remainingWords.length);
  nextItem = remainingWords.splice(randomIndex, 1)[0];

  if (currentItem) {
    if (rubyKanji && rubyKana) {
      rubyKanji.childNodes[0].nodeValue = currentItem.kanji;
      rubyKana.textContent = currentItem.kana;
    }
    currentKanaStr = currentItem.kana;
  }

  const nextDisplayEl = document.getElementById('next-kanji-display');
  if (nextDisplayEl && nextItem) {
    nextDisplayEl.textContent = nextItem.kanji;
  }

  romaPatterns = parseKanaToRomaPatterns(currentKanaStr);
  currentPatternIndex = 0;
  currentMatchedInput = "";
  typedRoma = "";

  if (typedTextDisplay) typedTextDisplay.textContent = "";
  updateDisplay();
}

function handleKeyPress(e) {
  if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;

  const scoreDisplay = document.getElementById('score');
  const typedTextDisplay = document.getElementById('typed-text');
  const wordDisplayArea = document.querySelector('.word-display-area');

  const inputKey = e.key.toLowerCase();
  let currentCandidates = romaPatterns[currentPatternIndex];
  if (!currentCandidates) return;

  if (currentMatchedInput === "n" && currentCandidates.includes("nn")) {
    const isLastPattern = (currentPatternIndex === romaPatterns.length - 1);

    if (inputKey === 'n') {
      // 2つ目の n
    } else if (isLastPattern || !"aeiouyn".includes(inputKey)) {
      currentPatternIndex++;
      currentMatchedInput = "";
      currentCandidates = romaPatterns[currentPatternIndex];
      
      if (!currentCandidates) {
        totalTypedCount++;
        score = totalTypedCount;
        if (scoreDisplay) scoreDisplay.textContent = score;
        if (gameMode === 'cpu') pushMeter(2.5);
        nextWord();
        return;
      }
    }
  }

  const testInput = currentMatchedInput + inputKey;
  const matchedPattern = currentCandidates.find(pattern => pattern.startsWith(testInput));

  if (matchedPattern) {
    currentMatchedInput = testInput;
    typedRoma += inputKey;
    totalTypedCount++;
    score = totalTypedCount;
    if (scoreDisplay) scoreDisplay.textContent = score;

    if (gameMode === 'cpu') {
      pushMeter(2.5);
    }

    if (currentMatchedInput === matchedPattern) {
      currentPatternIndex++;
      currentMatchedInput = "";
    }

    if (typedTextDisplay) typedTextDisplay.textContent = typedRoma;

    if (currentPatternIndex >= romaPatterns.length) {
      nextWord();
    } else {
      updateDisplay();
    }
  } else {
    missCount++;
    if (wordDisplayArea) {
      wordDisplayArea.classList.add('miss-flash');
      setTimeout(() => {
        wordDisplayArea.classList.remove('miss-flash');
      }, 150);
    }
  }
}

function startCpu() {
  cpuScore = 0;
  const levelSelect = document.getElementById('level-select');
  const level = levelSelect ? levelSelect.value : "1";
  
  const baseKpm = getTargetCount(level, 'cpu');

  if (cpuInterval) clearInterval(cpuInterval);

  const tickIntervalMs = 100;
  
  cpuInterval = setInterval(() => {
    const elapsedSec = (Date.now() - gameStartTime) / 1000;
    const decaySteps = Math.floor(elapsedSec / 10);
    const currentKpm = baseKpm * Math.pow(0.9, decaySteps);

    const hitsPerSec = currentKpm / 60;
    const meterChangePerTick = hitsPerSec * 2.5 * (tickIntervalMs / 1000);

    cpuScore += hitsPerSec * (tickIntervalMs / 1000);
    pushMeter(-meterChangePerTick);
  }, tickIntervalMs);
}

function showResults() {
  const playerNameInput = document.getElementById('player-name-input');
  const name = (playerNameInput && playerNameInput.value.trim()) || "ゲスト";
  const levelSelect = document.getElementById('level-select');
  const level = levelSelect ? levelSelect.value : "1";
  const targetValue = getTargetCount(level, gameMode);

  document.getElementById('res-player-name').textContent = name;

  const vsBox = document.getElementById('vs-result-box');
  const cpuStatBox = document.getElementById('res-cpu-stat-box');
  const targetStatBox = document.getElementById('res-target-count') ? document.getElementById('res-target-count').parentElement : null;
  const resTitleText = document.getElementById('result-title-text');

  const elapsedSeconds = Math.max((Date.now() - gameStartTime) / 1000, 0.1);
  const elapsedMinutes = elapsedSeconds / 60;

  if (gameMode === 'cpu') {
    if (resTitleText) resTitleText.textContent = "タイピング対戦 結果証明書";
    if (vsBox) vsBox.style.display = "block";
    if (cpuStatBox) cpuStatBox.style.display = "flex";
    if (targetStatBox) targetStatBox.style.display = "none";
    
    document.getElementById('res-cpu-typed').textContent = `${Math.floor(cpuScore)} 打`;

    const vsStatusEl = document.getElementById('res-vs-status');
    const targetMsgEl = document.getElementById('res-target-msg');
    
    const isWin = meterValue >= 100 || meterValue > 50;

    if (isWin) {
      if (vsStatusEl) { vsStatusEl.textContent = "WIN!"; vsStatusEl.className = "vs-status win"; }
      if (targetMsgEl) { targetMsgEl.textContent = "🎉 CPU撃破！ 次のレベル解放！"; targetMsgEl.style.color = "#00FFCC"; }
      unlockNextLevel('cpu', level);
    } else {
      if (vsStatusEl) { vsStatusEl.textContent = "LOSE..."; vsStatusEl.className = "vs-status lose"; }
      if (targetMsgEl) { targetMsgEl.textContent = "❌ CPUに押し切られました..."; targetMsgEl.style.color = "#FF3366"; }
    }
  } else {
    if (resTitleText) resTitleText.textContent = "タイムアタック 結果証明書";
    if (vsBox) vsBox.style.display = "none";
    if (cpuStatBox) cpuStatBox.style.display = "none";
    if (targetStatBox) targetStatBox.style.display = "flex";
  }

  const kpm = Math.round(totalTypedCount / elapsedMinutes);
  const totalInputs = totalTypedCount + missCount;
  const accuracy = totalInputs > 0 ? ((totalTypedCount / totalInputs) * 100).toFixed(1) : 0;

  document.getElementById('res-typed').textContent = `${totalTypedCount} 打`;
  document.getElementById('res-wpm').textContent = kpm;
  document.getElementById('res-accuracy').textContent = `${accuracy}%`;
  document.getElementById('res-miss').textContent = `${missCount} 回`;

  const targetCountEl = document.getElementById('res-target-count');
  if (targetCountEl) {
    targetCountEl.textContent = gameMode === 'cpu' ? `${targetValue} KPM` : `${targetValue} 打`;
  }

  saveScore(level, name, kpm);

  let title = "がんばろう！";
  if (kpm >= 1000) title = "神の領域";
  else if (kpm >= 800) title = "プロタイパー";
  else if (kpm >= 600) title = "超上級者";
  else if (kpm >= 400) title = "上級者";
  else if (kpm >= 300) title = "中級者";
  else if (kpm >= 200) title = "初級者";
  else if (kpm >= 100) title = "見習い";
  else title = "駆け出し";

  document.getElementById('res-title').textContent = title;
}

function endGame() {
  if (timerInterval) clearInterval(timerInterval);
  if (cpuInterval) clearInterval(cpuInterval);

  window.removeEventListener('keydown', handleKeyPress);
  document.body.classList.remove('in-game');

  document.getElementById('play-screen').classList.remove('active');
  document.getElementById('result-screen').classList.add('active');

  showResults();
}

function startCountdown(callback) {
  let countOverlay = document.getElementById('countdown-overlay');
  if (!countOverlay) {
    countOverlay = document.createElement('div');
    countOverlay.id = 'countdown-overlay';
    Object.assign(countOverlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(5, 5, 12, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '80px',
      fontWeight: 'bold',
      color: '#00FFCC',
      textShadow: '0 0 20px rgba(0, 255, 204, 0.6)',
      zIndex: '9999'
    });
    document.body.appendChild(countOverlay);
  }

  countOverlay.style.display = 'flex';
  
  const steps = ["3", "2", "1", "すたーと！"];
  let stepIndex = 0;

  countOverlay.textContent = steps[stepIndex];

  const interval = setInterval(() => {
    stepIndex++;
    if (stepIndex < steps.length) {
      countOverlay.textContent = steps[stepIndex];
    } else {
      clearInterval(interval);
      countOverlay.style.display = 'none';
      callback();
    }
  }, 1000);
}

function startGame() {
  const levelSelect = document.getElementById('level-select');
  const scoreDisplay = document.getElementById('score');
  const timerDisplay = document.getElementById('timer');
  const startScreen = document.getElementById('start-screen');
  const playScreen = document.getElementById('play-screen');
  const vsMeterContainer = document.getElementById('vs-meter-container');
  const timerStatusItem = document.getElementById('timer-status-item');

  score = 0;
  totalTypedCount = 0;
  missCount = 0;
  gameTime = 30;
  meterValue = 50;

  if (scoreDisplay) scoreDisplay.textContent = score;
  if (timerDisplay) timerDisplay.textContent = gameTime;

  if (gameMode === 'cpu') {
    if (vsMeterContainer) vsMeterContainer.style.display = "block";
    if (timerStatusItem) timerStatusItem.style.display = "none";
    updateMeterDisplay();
  } else {
    if (vsMeterContainer) vsMeterContainer.style.display = "none";
    if (timerStatusItem) timerStatusItem.style.display = "block";
  }

  let levelKey = levelSelect ? levelSelect.value : "1";
  if (gameMode === 'cpu') {
    levelKey = "4"; 
  }
  remainingWords = [...(WORD_LIST[levelKey] || WORD_LIST[4])];

  let randomIndex = Math.floor(Math.random() * remainingWords.length);
  nextItem = remainingWords.splice(randomIndex, 1)[0];

  if (startScreen) startScreen.classList.remove('active');
  if (playScreen) playScreen.classList.add('active');

  document.body.classList.add('in-game');

  nextWord();

  startCountdown(() => {
    window.addEventListener('keydown', handleKeyPress);
    gameStartTime = Date.now();

    if (gameMode === 'cpu') {
      startCpu();
    } else {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        gameTime--;
        if (timerDisplay) timerDisplay.textContent = gameTime;
        if (gameTime <= 0) {
          endGame();
        }
      }, 1000);
    }
  });
}

function updateLevelOptions() {
  const levelSelect = document.getElementById('level-select');
  
  if (gameMode === 'cpu') {
    document.body.classList.remove('mode-ta');
    document.body.classList.add('mode-cpu');
  } else {
    document.body.classList.remove('mode-cpu');
    document.body.classList.add('mode-ta');
  }

  if (!levelSelect) return;

  const currentVal = levelSelect.value || "1";
  let optionsHtml = "";

  if (gameMode === 'ta') {
    const taLevels = [
      { id: 1, name: "レベル1", target: 50 },
      { id: 2, name: "レベル2", target: 100 },
      { id: 3, name: "レベル3", target: 150 },
      { id: 4, name: "大会", target: 200 }
    ];

    taLevels.forEach(lvl => {
      optionsHtml += `<option value="${lvl.id}">${lvl.name}（目標 ${lvl.target}打）</option>`;
    });
  } else {
    const unlockedLvl = getUnlockedLevel('cpu');
    for (let i = 1; i <= 21; i++) {
      let targetKpm = getTargetCount(i, 'cpu');
      let isLocked = i > unlockedLvl;
      let disabledAttr = isLocked ? "disabled" : "";
      let lockIcon = isLocked ? " 🔒" : "";
      
      let labelName = `レベル${i}`;
      optionsHtml += `<option value="${i}" ${disabledAttr}>${labelName}（目標 ${targetKpm}KPM）${lockIcon}</option>`;
    }
  }

  levelSelect.innerHTML = optionsHtml;
  
  if (gameMode === 'cpu') {
    const unlockedLvl = getUnlockedLevel('cpu');
    if (Number(currentVal) > unlockedLvl) {
      levelSelect.value = unlockedLvl.toString();
    } else {
      levelSelect.value = currentVal;
    }
  } else {
    levelSelect.value = currentVal <= 4 ? currentVal : "1";
  }
}

// ==========================================
// 6. パスワード認証 & ロード時初期化
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const passwordModal = document.getElementById('password-modal');
  const passwordForm = document.getElementById('password-form');
  const passwordInput = document.getElementById('password-input');
  const passwordError = document.getElementById('password-error');
  const modalContent = document.querySelector('.modal-content');

  // パスワード認証ロジック
  const CORRECT_PASSWORD = "kotou.class8";

  function checkPassword() {
    const entered = passwordInput.value;
    if (entered === CORRECT_PASSWORD) {
      passwordModal.classList.add('hidden');
      setTimeout(() => {
        passwordModal.style.display = 'none';
      }, 300);
    } else {
      passwordError.textContent = "パスワードが間違っています！";
      modalContent.classList.add('shake');
      passwordInput.value = "";
      passwordInput.focus();
      setTimeout(() => {
        modalContent.classList.remove('shake');
      }, 400);
    }
  }

  if (passwordForm) {
    passwordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      checkPassword();
    });
  }

  // 初期フォーカス設定
  if (passwordInput) {
    passwordInput.focus();
  }

  // ゲームUI用イベント
  const startBtn = document.getElementById('start-btn');
  const retryBtn = document.getElementById('retry-btn');
  const levelSelect = document.getElementById('level-select');
  const modeBtns = document.querySelectorAll('.mode-btn');

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      gameMode = btn.getAttribute('data-mode');
      
      updateLevelOptions();
      updateRankingDisplay();
    });
  });

  updateLevelOptions();
  updateRankingDisplay();

  if (levelSelect) {
    levelSelect.addEventListener('change', updateRankingDisplay);
  }

  if (startBtn) {
    startBtn.onclick = () => {
      startGame();
    };
  }

  if (retryBtn) {
    retryBtn.onclick = () => {
      document.getElementById('result-screen').classList.remove('active');
      document.getElementById('start-screen').classList.add('active');
      updateLevelOptions();
      updateRankingDisplay();
    };
  }
});