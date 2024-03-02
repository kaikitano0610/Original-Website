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
    });
  });

   // 戻るボタンのイベントハンドラ
   $(document).on("click", ".return", function() {
    // experience_containerの内容を初期状態に復元
    $("#experience_container").html(initialExperienceContent).fadeIn(1000);
  });
});

