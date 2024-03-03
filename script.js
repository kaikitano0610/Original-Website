gsap.registerPlugin(ScrollTrigger);

    document.addEventListener("DOMContentLoaded", function() {
      // ドキュメントが完全に読み込まれた後にアニメーションを設定
      const listWrapperEl = document.querySelector('.slider_parent');
      const listEl = document.querySelector('.slider');

      gsap.to(listEl, {
        x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: '#section2',
          start: 'top top',
          end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.set("#large_title", {opacity: 0});
      gsap.set(".sub-title", {opacity: 0});
      gsap.fromTo(".hero", 1.5, { height: "0%" }, { height: "100%", ease: Power2.easeInOut });
      gsap.to("#large_title", {duration: 1, opacity: 1, delay: 1.5, ease: Power2.easeInOut});
      gsap.to(".sub-title", {duration: 1, opacity: 1, delay: 3});
    });

gsap.set("#large_title",{opacity:0});
gsap.set(".sub-title",{opacity:0});
gsap.fromTo(".hero", 1.5, { height: "0%" }, { height: "100%", ease: Power2.easeInOut });
gsap.to("#large_title",{duration:1,opacity:1,delay:1.5,ease: Power2.easeInOut})
gsap.to(".sub-title",{duration:1,opacity:1,delay:3})





$(function(){

  $(".experience_btm").hover(
    function() { // マウスがホバーされた時の動作
        $(this).addClass('experience_btm-hover');
    }, 
    function() { // マウスが離れた時の動作
        $(this).removeClass('experience_btm-hover');
    }
  );

  // experience_containerの初期内容を保存
  var initialExperienceContent = $("#experience_container").html();

  $(document).on("click", ".experience_btm", function() {
    let $id = $(this).attr("id"); 
  
    $("#experience_container").fadeOut(1000, function() {
      // フェードアウト完了後の処理
      $(this).empty(); // コンテナの内容をクリア
      if ($id === "q1") {
        // 共通の親要素を作成
        let $commonParent = $("<div>").addClass("common-parent");
        
        // 質問者のアイコン画像を作成
        let $userIcon = $("<img>").attr("src", "./user_logo.jpg").addClass("user-icon");
        
        // GPTのアイコン画像を作成
        let $gptIcon = $("<img>").attr("src", "./gpt_logo.jpg").addClass("gpt-icon");

        //戻るボタン作成
        let $return_button=$("<button>").addClass("return").text("戻る");

        $return_button.hover(
          function() { // マウスがホバーされた時の動作
              $(this).addClass('hover');
          }, 
          function() { // マウスが離れた時の動作
              $(this).removeClass('hover');
          }
        );
        
        // 質問テキストを持つ要素を作成
        let $q1_question = $("<div>").addClass("question").text("これまでに飛行機に乗ったことがない人に、飛行機の乱気流について説明できますか？会話調で、かつ簡潔にお願いします。");
        
        // 回答テキストを動的に表示するための空の要素を作成し、GPTアイコンを追加
        let $q1_answer = $("<div>").addClass("answer");
        
        // 質問と回答要素を共通の親要素に追加
        $commonParent.append($userIcon).append($q1_question).append($gptIcon).append($q1_answer);
        
        
        // 共通の親要素をコンテナに追加してフェードイン
        $(this).append($commonParent).fadeIn(1000, function() {
          // 一文字ずつテキストを表示する関数
          let q1_answerText = "もちろんです。乱気流とは、飛行機が空中で遭遇する不安定な気流のことを言います。これはちょっとした空の揺れみたいなもので、天気が変わりやすい場所や山岳地帯の近くでよく起こります。想像してみてください、飛行機が大きな空の海を進んでいるとき、風の流れが急に変わったり、上下に強く動いたりすることがあります。それが乱気流です。ほとんどの場合、乱気流は安全上の大きな問題にはなりませんが、シートベルトをしていないと、少し不快に感じたり、稀に軽い怪我をすることもあります。だから、乱気流に備えて、飛行機に乗る時はシートベルトをしておくことが大切です。パイロットは乱気流を避けるように努めていますが、予測できないこともあるので、準備しておくことが重要です。";
          function showLetter(text, index, $element, callback) {
            if (index < text.length) {
              $element.append(text[index]);
              setTimeout(function() {
                showLetter(text, index + 1, $element, callback); // callbackを次の再帰呼び出しに渡します
              }, 50); // 速度調整はここで
            } else {
              callback(); // テキストの全文字が表示された後にcallback関数を呼び出します
            }
          }
          
          // showLetter関数を呼び出す際に、全ての文字が表示された後に実行したい処理を含むcallback関数を渡します
          showLetter(q1_answerText, 0, $q1_answer, function() {
            // ここに全文字表示後の処理を書きます
            $commonParent.append($return_button); // 全ての文字が表示された後に戻るボタンを追加
          });

        });
      }

      if ($id === "q2") {
        // 共通の親要素を作成
        let $commonParent = $("<div>").addClass("common-parent");
        
        // 質問者のアイコン画像を作成
        let $userIcon = $("<img>").attr("src", "./user_logo.jpg").addClass("user-icon");
        
        // GPTのアイコン画像を作成
        let $gptIcon = $("<img>").attr("src", "./gpt_logo.jpg").addClass("gpt-icon");

        //戻るボタン作成
        let $return_button=$("<button>").addClass("return").text("戻る");

        $return_button.hover(
          function() { // マウスがホバーされた時の動作
              $(this).addClass('hover');
          }, 
          function() { // マウスが離れた時の動作
              $(this).removeClass('hover');
          }
        );
        
        // 質問テキストを持つ要素を作成
        let $q1_question = $("<div>").addClass("question").text("冷蔵庫に豚バラと白菜と牛乳があります。これらの材料を使って、体があたたまるような夜ご飯の献立を考えてください。");
        
        // 回答テキストを動的に表示するための空の要素を作成し、GPTアイコンを追加
        let $q1_answer = $("<div>").addClass("answer");
        
        // 質問と回答要素を共通の親要素に追加
        $commonParent.append($userIcon).append($q1_question).append($gptIcon).append($q1_answer);
        
        
        // 共通の親要素をコンテナに追加してフェードイン
        $(this).append($commonParent).fadeIn(1000, function() {
          // 一文字ずつテキストを表示する関数
          let q1_answerText = "豚バラ、白菜、牛乳を使って体が温まるような夜ご飯には、豚バラと白菜のミルク煮がおすすめです。この料理は、豚バラ肉の旨味と白菜の甘みが牛乳の優しい味わいと組み合わさり、体を温めるとともに満足感も得られます。以下にレシピの大まかな手順を紹介します。\n豚バラと白菜のミルク煮\n\n材料\n・豚バラ肉：300g（薄切り）\n・白菜：1/4個（約500g）\n・牛乳：500ml\n・塩：小さじ1\n黒こしょう：少々\n・にんにく：1片（みじん切り）\n・オリーブオイル：適量\n(オプション) ・しょうが：1片（みじん切り）\n(オプション) ・鶏ガラスープの素：小さじ1\n\n手順\n1．白菜は一口大に切り、豚バラ肉は食べやすい大きさに切る。\n2．鍋にオリーブオイルを熱し、みじん切りにしたにんにく（しょうががあれば一緒に）を炒める。\n3．香りが出てきたら、豚バラ肉を加えて色が変わるまで炒める。\n4．豚バラ肉に火が通ったら、白菜を加えて炒め合わせる。\n5．白菜がしんなりしてきたら、牛乳を加える。この時、鶏ガラスープの素を加えてもよい。\n6．中火で煮込み、白菜が柔らかくなり、味がなじんだら塩と黒こしょうで味を調える。\n7．火から下ろし、お皿に盛り付ける。\n\nこの料理は、寒い夜に体を温めるのに最適です。牛乳は料理にコクとまろやかさを加え、豚肉と白菜の味を引き立てます。お好みで、パンやごはんと一緒に召し上がれ。";
          function showLetter(text, index, $element, callback) {
            if (index < text.length) {
              // 改行文字を検出した場合
              if (text[index] === "\n") {
                $element.append($("<br>")); // 改行を挿入
              } else {
                $element.append(text[index]);
              }
              setTimeout(function() {
                showLetter(text, index + 1, $element, callback); // callbackを次の再帰呼び出しに渡します
              }, 50); // 速度調整はここで
            } else {
              callback(); // テキストの全文字が表示された後にcallback関数を呼び出します
            }
          }
          
          // showLetter関数を呼び出す際に、全ての文字が表示された後に実行したい処理を含むcallback関数を渡します
          showLetter(q1_answerText, 0, $q1_answer, function() {
            // ここに全文字表示後の処理を書きます
            $commonParent.append($return_button); // 全ての文字が表示された後に戻るボタンを追加
          });

        });
      }

      if ($id === "q3") {
        // 共通の親要素を作成
        let $commonParent = $("<div>").addClass("common-parent");
        
        // 質問者のアイコン画像を作成
        let $userIcon = $("<img>").attr("src", "./user_logo.jpg").addClass("user-icon");
        
        // GPTのアイコン画像を作成
        let $gptIcon = $("<img>").attr("src", "./gpt_logo.jpg").addClass("gpt-icon");

        //戻るボタン作成
        let $return_button=$("<button>").addClass("return").text("戻る");

        $return_button.hover(
          function() { // マウスがホバーされた時の動作
              $(this).addClass('hover');
          }, 
          function() { // マウスが離れた時の動作
              $(this).removeClass('hover');
          }
        );
        
        // 質問テキストを持つ要素を作成
        let $q1_question = $("<div>").addClass("question").text("釣りが大好きなお父さんへのクリエイティブなギフトアイデアをいくつか考えてもらえますか？ただし、釣り具は含めないでください。");
        
        // 回答テキストを動的に表示するための空の要素を作成し、GPTアイコンを追加
        let $q1_answer = $("<div>").addClass("answer");
        
        // 質問と回答要素を共通の親要素に追加
        $commonParent.append($userIcon).append($q1_question).append($gptIcon).append($q1_answer);
        
        
        // 共通の親要素をコンテナに追加してフェードイン
        $(this).append($commonParent).fadeIn(1000, function() {
          // 一文字ずつテキストを表示する関数
          let q1_answerText = "釣りが好きなお父さんへのギフトとして、釣り具以外のアイテムを考えるのは面白い挑戦です。以下にいくつかクリエイティブなアイデアを挙げます：\n\n1．パーソナライズされた釣りテーマの装飾品\nお父さんの名前や好きな魚種が入ったカスタムメイドのウォールアートや、釣りをテーマにした風景画など、お父さんの釣りへの情熱を表現する装飾品は特別なギフトになります。\n\n2．釣り日記またはログブック\n釣行ごとの詳細（日付、場所、天候、捕獲した魚の種類やサイズなど）を記録するための専用の日記やログブック。釣りの思い出を振り返るのに最適です。\n\n3．防水Bluetoothスピーカー\n釣りの際に好きな音楽を楽しめるように、防水仕様のポータブルBluetoothスピーカーは、釣り愛好家にとって理想的なギフトです。\n\n4．高品質のサングラス\n眩しい日差しや水面の反射から目を保護し、水中の視認性を向上させるための、偏光レンズを備えた高品質のサングラス。\n\n5．釣りテーマのグルメギフトセット\n海の幸や川の幸をテーマにしたグルメセット。スモークサーモンやアンチョビ、高級缶詰など、釣り好きならではの味覚を楽しめるセレクションです。\n\n6．釣りにちなんだ体験ギフト\n釣りチャーターへの招待や、プロの釣りガイドとの一日など、実際に釣りを楽しめる体験ギフト。\n\n7．釣りテーマのTシャツやキャップ\nお父さんの釣り愛を表現する、ユニークなデザインのTシャツやキャップ。面白い釣りのスローガンやイラストが入ったアイテムを選びましょう。\n\n8．アウトドア用マルチツール\n釣りだけでなく、アウトドア全般で役立つ多機能マルチツール。ナイフ、はさみ、ピンセット、栓抜きなど、さまざまな機能を備えたものがおすすめです。\n\nこれらのギフトアイデアは、釣り愛好家であるお父さんへの愛情を表現する素晴らしい方法です。お父さんの趣味や興味に合わせて、最も喜んでくれそうなアイテムを選んでください。";
          function showLetter(text, index, $element, callback) {
            if (index < text.length) {
              // 改行文字を検出した場合
              if (text[index] === "\n") {
                $element.append($("<br>")); // 改行を挿入
              } else {
                $element.append(text[index]);
              }
              setTimeout(function() {
                showLetter(text, index + 1, $element, callback); // callbackを次の再帰呼び出しに渡します
              }, 50); // 速度調整はここで
            } else {
              callback(); // テキストの全文字が表示された後にcallback関数を呼び出します
            }
          }
          // showLetter関数を呼び出す際に、全ての文字が表示された後に実行したい処理を含むcallback関数を渡します
          showLetter(q1_answerText, 0, $q1_answer, function() {
            // ここに全文字表示後の処理を書きます
            $commonParent.append($return_button); // 全ての文字が表示された後に戻るボタンを追加
          });

        });
      }

      if ($id === "q4") {
        // 共通の親要素を作成
        let $commonParent = $("<div>").addClass("common-parent");
        
        // 質問者のアイコン画像を作成
        let $userIcon = $("<img>").attr("src", "./user_logo.jpg").addClass("user-icon");
        
        // GPTのアイコン画像を作成
        let $gptIcon = $("<img>").attr("src", "./gpt_logo.jpg").addClass("gpt-icon");

        //戻るボタン作成
        let $return_button=$("<button>").addClass("return").text("戻る");

        $return_button.hover(
          function() { // マウスがホバーされた時の動作
              $(this).addClass('hover');
          }, 
          function() { // マウスが離れた時の動作
              $(this).removeClass('hover');
          }
        );
        
        // 質問テキストを持つ要素を作成
        let $q1_question = $("<div>").addClass("question").text("良い新年の抱負を立てるためのアイデアを3つ教えてください。個人的なもの、家族向けのもの、そして仕事に関連するものをいくつか教えてください。");
        
        // 回答テキストを動的に表示するための空の要素を作成し、GPTアイコンを追加
        let $q1_answer = $("<div>").addClass("answer");
        
        // 質問と回答要素を共通の親要素に追加
        $commonParent.append($userIcon).append($q1_question).append($gptIcon).append($q1_answer);
        
        
        // 共通の親要素をコンテナに追加してフェードイン
        $(this).append($commonParent).fadeIn(1000, function() {
          // 一文字ずつテキストを表示する関数
          let q1_answerText = "新年の抱負を立てることは、新しい年を前向きにスタートさせる素晴らしい方法です。個人的な成長、家族の絆の強化、そして仕事での成功に焦点を当てた抱負をいくつか提案します。\n\n個人的な抱負\n健康習慣の向上 - 健康は最も重要な資産の一つです。新年には、健康的な食生活を心がけたり、定期的な運動を始めたりすることで、体調を整えることを目指しましょう。毎日の運動目標を設定するか、週に数回特定の食材を摂取するなど、小さなステップから始めることが重要です。\n\n家族向けの抱負\n家族との時間を増やす - 忙しい生活の中で、家族と過ごす時間はしばしば犠牲になりがちです。新年には、定期的な家族の夕食の時間を設けたり、週末には家族でアクティビティを計画したりして、家族との絆を深めましょう。共通の趣味を見つけることも、家族間の関係を強化する素晴らしい方法です。\n\n仕事に関連する抱負\nスキルアップと専門知識の拡大 - 職場での成長と進歩は、キャリアの成功に不可欠です。新年には、新しいスキルを学んだり、専門知識を深めたりすることを目標にしましょう。オンラインコースを受講したり、業界のセミナーに参加したりすることで、専門分野でのあなたの価値を高めることができます。\n\nこれらの抱負は、新しい年を充実したものにするための出発点となります。しかし、最も重要なのは、設定した目標に対してリアルで達成可能な計画を立て、一貫して取り組むことです。新年の抱負を達成するためには、モチベーションを維持し、自分自身に正直であることが鍵となります。";
          function showLetter(text, index, $element, callback) {
            if (index < text.length) {
              // 改行文字を検出した場合
              if (text[index] === "\n") {
                $element.append($("<br>")); // 改行を挿入
              } else {
                $element.append(text[index]);
              }
              setTimeout(function() {
                showLetter(text, index + 1, $element, callback); // callbackを次の再帰呼び出しに渡します
              }, 50); // 速度調整はここで
            } else {
              callback(); // テキストの全文字が表示された後にcallback関数を呼び出します
            }
          }
          
          // showLetter関数を呼び出す際に、全ての文字が表示された後に実行したい処理を含むcallback関数を渡します
          showLetter(q1_answerText, 0, $q1_answer, function() {
            // ここに全文字表示後の処理を書きます
            $commonParent.append($return_button); // 全ての文字が表示された後に戻るボタンを追加
          });

        });
      }

    });
  });

   // 戻るボタンのイベントハンドラ
   $(document).on("click", ".return", function() {
    // experience_containerの内容を初期状態に復元
    $("#experience_container").html(initialExperienceContent).fadeIn(1000);
  });
});

