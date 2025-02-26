

$(function(){

  $('#Modal').on('show.bs.modal', function (event) {


    var a = $(event.relatedTarget);
    var recipient = a.data('whatever');

      if (recipient == "Modal1") {
        var title = "Airbnbホストになれるのはどんな人？";
        var text = "一部の地域を除き、Airbnbホストをはじめるのはとても簡単です。リスティングの作成および掲載もすべて無料。マンションやアパートなど住宅のまるまる貸切から個室、ツリーハウス、お城に至るまで、Airbnbでは幅広いタイプの宿泊先を取り扱っています。ホストに求められる詳しい要件につきましては、安全・セキュリティ・信頼性に関するAirbnbコミュニティの基準、高評価レビューを獲得するためのポイントをまとめたホスピタリティの基準をチェックしてみましょう。";
      } else if (recipient == "Modal2") {
        var title = "予約前にゲストに求められる要件は？";
        var text = "Airbnbではご利用のみなさま全員に、ご旅行の前にいくつかの情報の入力をお願いしています。 ゲストは、予約をリクエストする前にこうした必要事項をすべて記入しなければなりません。 これはホストが宿泊者の情報と連絡先を確認するためのものです。 Airbnbがゲストに求める要件には次のようなものがあります。氏名メールアドレス認証済みの電話番号自己紹介のメッセージハウスルールへの同意お支払い情報。ゲストによるプロフィール写真の公開は推奨されていますが、必須ではありません。 さらにホストが希望すれば、宿泊予約の前にAirbnbにIDを提示するようゲストに求めることもできます";
      } else if (recipient == "Modal3") {
        var title = "お部屋を掲載するには、いくらかかるの？";
        var text = "Airbnbへのアカウント登録、お部屋の掲載は完全無料です。予約がとれたら、Airbnbは運営費として宿泊料金からサービス料（通常3％）をいただきます。";
      } else if (recipient == "Modal4") {
        var title = "家財破損があった場合、どのような補償がありますか？";
        var text = "「Airbnbホスト保証」とは、ゲストによる家財破損の被害総額が保証金を超える場合や保証金未設定の場合、ホストに最大$1,000,000までの補償をお支払いするプログラムのことです。現金、有価証券、収集品、稀少価値のある芸術品、宝石、ペット、対人賠償責任は「Airbnbホスト保証」プログラムの適用対象外です。 ホストのみなさまには、自宅を貸し出す際に貴重品を安全な場所に保管または撤去するよう推奨しています。 また、摩耗や劣化が原因の破損も本プログラムの対象外となります。「ホスト保証」の詳細は<a>http://airbnb.com/guarantee</a>でご確認いただけます";
      } else if (recipient == "Modal5") {
        var title = "リスティングの料金はどうやって決めたらいいの？";
        var text = "料金選びは100%ホストの裁量に任されています。 値付けの目安が欲しい場合には、お住まいの都市やエリアで類似のリスティングを検索すると大体の相場感がつかめます。 追加料金 > - 清掃料金：清掃料金は、1泊あたりの宿泊料金に含めることも、料金設定で別途追加することもできます。 上> - その他の料金：宿泊料金とは別に料金（レートチェックイン、ペットなど）を請求したいときは、予約前にそれが有料であることをゲストに事前通告した上で、問題解決センターを通じてセキュアな環境で支払いを請求するようにしましょう。";
      } else if (recipient == "Modal6") {
        var title = "Airbnbはお部屋の料金の設定をサポートしてくれる？";
        var text = "Airbnbのスマートプライシングを使うと、類似の競合の需要変動に合わせて料金を自動的に値上げしたり値下げしたりすることができます。料金は常にご自身の責任において管理しなければなりませんので、スマートプライシングでも事前に選んだ設定の範囲内で料金は変動し、気に入らなければ1泊あたりの料金はいつでも変更できます。スマートプライシングの料金選定は、リスティングの所在地、季節、需要、その他の要因（地元のイベントなど）に基づいて行われます。";
      }

    var modal = $(this);
    modal.find('.modal-title').text(title);
    modal.find('.modal-body').text(text);
  })
})