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


    });

gsap.set("#large_title",{opacity:0});
gsap.set(".sub-title",{opacity:0});
gsap.fromTo(".hero", 1.5, { height: "0%" }, { height: "100%", ease: Power2.easeInOut });
gsap.to("#large_title",{duration:1,opacity:1,delay:1.5,ease: Power2.easeInOut})
gsap.to(".sub-title",{duration:1,opacity:1,delay:3})

function checkWindowSize() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var textElement = document.querySelector('#experience');

  if (width < 730) {
    textElement.innerHTML = "Chat GPTを体験してみましょう。聞きたい質問文をタップしてください。";
  } else {
    textElement.innerHTML = "Chat GPTを体験してみましょう。聞きたい質問文をクリックしてください。";
  }
}

// ウィンドウのリサイズイベントに関数をバインドします
window.addEventListener('resize', checkWindowSize);

// ページ読み込み時にも実行します
checkWindowSize();



$(function() {
    // マウスがホバーされた時の動作
    $(document).on("mouseenter", ".experience_btm", function() {
        $(this).addClass('experience_btm-hover');
    });
    // マウスが離れた時の動作
    $(document).on("mouseleave", ".experience_btm", function() {
        $(this).removeClass('experience_btm-hover');
    });

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

        //アイコンとテキストを入れる箱を作成
        let $user_box = $("<div>").addClass("user_box");
        let $gpt_box = $("<div>").addClass("gpt_box");
        
        //アイコンのみが入る箱を作成
        let $question_icon = $("<div>").addClass("question_icon");
        let $answer_icon = $("<div>").addClass("answer_icon");

        // 質問者のアイコン画像を作成
        let $userIcon = $("<img>").attr("src", "./ok-size/user_logo.jpg").addClass("user-icon");
        
        // GPTのアイコン画像を作成
        let $gptIcon = $("<img>").attr("src", "./ok-size/gpt_logo.jpg").addClass("gpt-icon");

        //アイコンが入る箱にアイコンを挿入
        $question_icon.append($userIcon)
        $answer_icon.append($gptIcon)

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
        let $q1_question = $("<div>").addClass("question").text("取引先の△△会社の○○さんに、昨日の打ち合わせへの感謝と提案検討の旨を伝えるメールを書いてください。");

        // 回答テキストを動的に表示するための空の要素を作成し、GPTアイコンを追加
        let $q1_answer = $("<div>").addClass("answer");
        
        //親要素にそれぞれのboxを追加
        $commonParent.append($user_box).append($gpt_box)

        //それぞれのboxにアイコンとテキストの箱を追加
        $user_box.append($question_icon).append($q1_question)
        $gpt_box.append($answer_icon).append($q1_answer)

        
        // 共通の親要素をコンテナに追加してフェードイン
        $(this).append($commonParent).fadeIn(1000, function() {
          // 一文字ずつテキストを表示する関数
          let q1_answerText = "件名: 昨日の打ち合わせに感謝いたします\n\n△△会社　○○様\n\nお世話になっております。[あなたの名前]です。\n\n昨日はお忙しい中、貴重なお時間をいただき、打ち合わせを行っていただきありがとうございました。○○様からご提案いただいた内容につきまして、私たちも非常に興味を持っておりますし、[あなたの会社名]としても大変価値あるものと考えております。\n\nご提案いただいた[具体的な提案内容]については、社内で詳細な検討を重ね、どのように進めていけば最も効果的か、また、どのような協力体制が構築できるか等、具体的なプランを練る予定です。今後、何かご質問やさらに詳細な情報が必要になった場合は、改めてご連絡をさせていただくかもしれません。その際は、何卒よろしくお願い申し上げます。\n\nまた、進展がありましたら、随時、報告させていただきます。次回の打ち合わせの機会にも、より具体的なご提案ができるよう、準備を進めて参りますので、今後ともよろしくお願いいたします。\n\n昨日の打ち合わせでの貴重なご意見、そして有益なご提案をいただき、本当にありがとうございました。△△会社様との今後のさらなる協力関係の発展を楽しみにしております。\n\n何かございましたら、いつでもご連絡ください。今後とも、どうぞ宜しくお願い致します。\n\n敬具\n\n[あなたの名前]\n[あなたの役職]\n[あなたの連絡先情報]\n[あなたの会社名]";
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
              }, 20); // 速度調整はここで
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

        //アイコンとテキストを入れる箱を作成
        let $user_box = $("<div>").addClass("user_box");
        let $gpt_box = $("<div>").addClass("gpt_box");
        
        //アイコンのみが入る箱を作成
        let $question_icon = $("<div>").addClass("question_icon");
        let $answer_icon = $("<div>").addClass("answer_icon");

        // 質問者のアイコン画像を作成
        let $userIcon = $("<img>").attr("src", "./ok-size/user_logo.jpg").addClass("user-icon");
        
        // GPTのアイコン画像を作成
        let $gptIcon = $("<img>").attr("src", "./ok-size/gpt_logo.jpg").addClass("gpt-icon");

        //アイコンが入る箱にアイコンを挿入
        $question_icon.append($userIcon)
        $answer_icon.append($gptIcon)

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
        
        //親要素にそれぞれのboxを追加
        $commonParent.append($user_box).append($gpt_box)

        //それぞれのboxにアイコンとテキストの箱を追加
        $user_box.append($question_icon).append($q1_question)
        $gpt_box.append($answer_icon).append($q1_answer)

        
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
              }, 20); // 速度調整はここで
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

        //アイコンとテキストを入れる箱を作成
        let $user_box = $("<div>").addClass("user_box");
        let $gpt_box = $("<div>").addClass("gpt_box");
        
        //アイコンのみが入る箱を作成
        let $question_icon = $("<div>").addClass("question_icon");
        let $answer_icon = $("<div>").addClass("answer_icon");

        // 質問者のアイコン画像を作成
        let $userIcon = $("<img>").attr("src", "./ok-size/user_logo.jpg").addClass("user-icon");
        
        // GPTのアイコン画像を作成
        let $gptIcon = $("<img>").attr("src", "./ok-size/gpt_logo.jpg").addClass("gpt-icon");

        //アイコンが入る箱にアイコンを挿入
        $question_icon.append($userIcon)
        $answer_icon.append($gptIcon)

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
        let $q1_question = $("<div>").addClass("question").text("フィリピンのレストランにきたのですが、注文の方法が分からない。基本的なフレーズを教えて。");

        // 回答テキストを動的に表示するための空の要素を作成し、GPTアイコンを追加
        let $q1_answer = $("<div>").addClass("answer");
        
        //親要素にそれぞれのboxを追加
        $commonParent.append($user_box).append($gpt_box)

        //それぞれのboxにアイコンとテキストの箱を追加
        $user_box.append($question_icon).append($q1_question)
        $gpt_box.append($answer_icon).append($q1_answer)

        
        // 共通の親要素をコンテナに追加してフェードイン
        $(this).append($commonParent).fadeIn(1000, function() {
          // 一文字ずつテキストを表示する関数
          let q1_answerText = "フィリピンのレストランで注文する際に使える基本的なフレーズをいくつか紹介します。フィリピンでは英語が広く通じるため、英語での注文が可能ですが、タガログ語での基本的なフレーズも添えておきます。\n\n英語での注文フレーズ\n1. I would like to order [dish name], please.\n　「[料理名]を注文したいです。」\n2. Could you recommend a dish?\n　「おすすめの料理はありますか？」\n3. What is today's special?\n　「今日のおすすめは何ですか？」\n4. Can I have the menu, please?\n　「メニューをもらえますか？」\n5. I'm allergic to [allergy], does this contain any?\n　「[アレルギー]にアレルギーがあるのですが、これに含まれていますか？」\n6. Can I have a glass of water, please?\n　「水を一杯もらえますか？」\n\nタガログ語での注文フレーズ\n1. Gusto ko po ng [dish name], pakiusap.\n　「[料理名]を注文したいです。」\n2. Ano po ba ang inirerekomenda ninyo?\n　「おすすめの料理は何ですか？」\n3. Ano po ang espesyal ngayon?\n　「今日のスペシャルは何ですか？」\n4. Pwede po bang makahingi ng menu?\n　「メニューをいただけますか？」\n5. May allergy ako sa [allergy], meron ba ito?\n　「[アレルギー]にアレルギーがあるのですが、これに含まれていますか？」\n6. Pwede po bang makahingi ng isang baso ng tubig?\n　「水を一杯もらえますか？」\nこれらのフレーズを参考にして、フィリピンのレストランでスムーズに注文を行えるようにしてください。もし不安であれば、最初に英語で試してみて、通じなければタガログ語のフレーズを使ってみると良いでしょう。";
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
              }, 20); // 速度調整はここで
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

        //アイコンとテキストを入れる箱を作成
        let $user_box = $("<div>").addClass("user_box");
        let $gpt_box = $("<div>").addClass("gpt_box");
        
        //アイコンのみが入る箱を作成
        let $question_icon = $("<div>").addClass("question_icon");
        let $answer_icon = $("<div>").addClass("answer_icon");

        // 質問者のアイコン画像を作成
        let $userIcon = $("<img>").attr("src", "./ok-size/user_logo.jpg").addClass("user-icon");
        
        // GPTのアイコン画像を作成
        let $gptIcon = $("<img>").attr("src", "./ok-size/gpt_logo.jpg").addClass("gpt-icon");

        //アイコンが入る箱にアイコンを挿入
        $question_icon.append($userIcon)
        $answer_icon.append($gptIcon)

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
        let $q1_question = $("<div>").addClass("question").text("副業でWebサイトの制作を始めたいと思います。ただ、スキルも経験も0ないので、何から始めたらいいか教えてください。");

        // 回答テキストを動的に表示するための空の要素を作成し、GPTアイコンを追加
        let $q1_answer = $("<div>").addClass("answer");
        
        //親要素にそれぞれのboxを追加
        $commonParent.append($user_box).append($gpt_box)

        //それぞれのboxにアイコンとテキストの箱を追加
        $user_box.append($question_icon).append($q1_question)
        $gpt_box.append($answer_icon).append($q1_answer)

        
        // 共通の親要素をコンテナに追加してフェードイン
        $(this).append($commonParent).fadeIn(1000, function() {
          // 一文字ずつテキストを表示する関数
          let q1_answerText = "Webサイト制作を副業として始めるには、基本的なスキルを身につけることからスタートする必要があります。以下に、Webサイト制作に必要なスキルを習得するためのステップを紹介します。\n\n・HTMLとCSSの基礎を学ぶ\n　Webサイトの構造を作るHTMLと、その見た目を整えるCSSは、Webサイト制作の基本です。これらの言語の基礎を理解し、簡単なページが作れるようになることが第一歩です。\n・JavaScriptを学ぶ\n　JavaScriptは、Webページに動的な要素を加えるためのプログラミング言語です。基本的な操作から始めて、徐々に複雑な機能の実装方法を学びましょう。\n・レスポンシブデザインを理解する\n　スマートフォンやタブレットなど、さまざまなデバイスで適切に表示されるように、レスポンシブデザインの知識を身につけることが重要です。\n・Webデザインの基本を学ぶ\n　良いWebサイトは、使いやすさと見た目の良さが重要です。基本的なデザイン原則を学び、ユーザー体験(UX)とユーザーインターフェイス(UI)の設計について理解しましょう。\n・CMSの利用を学ぶ\n　WordPressなどのコンテンツ管理システム(CMS)を使えば、コーディング知識が少なくてもWebサイトを構築できます。CMSの基本的な使い方を学び、テーマやプラグインのカスタマイズ方法にも触れてみましょう。\n・SEOの基本を理解する\n　検索エンジン最適化(SEO)は、Webサイトが検索結果で上位に表示されるようにするための重要なスキルです。基本的なSEOの技術と戦略を学びましょう。\n・プロジェクトで実践する\n　学んだ知識を実践に移し、自分のWebサイトを作成してみましょう。また、フリーランスのプラットフォームを利用して小さなプロジェクトから仕事を始めることも一つの方法です。\n・ポートフォリオを作成する\n　完成したプロジェクトや自身のスキルを示すためのポートフォリオサイトを作成しましょう。これが、将来的なクライアントへのアピールとなります。\n・継続的に学び、スキルアップする\n　Web技術は常に進化しています。オンラインコース、チュートリアル、コミュニティに参加することで、最新のトレンドや技術を学び続けましょう。\nこれらのステップを踏むことで、副業としてWebサイト制作を始めるための基礎を固めることができます。何よりも大切なのは、学び続ける姿勢と実践を通じて経験を積むことです。";
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
              }, 20); // 速度調整はここで
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
   $(document).on("click", ".return, #section3", function() {
    // experience_containerの内容を初期状態に復元
    $("#experience_container").html(initialExperienceContent).fadeIn(1000);
  });


  $(function(){
    $(window).scroll(function (){
      $('.js-fade,.js-fade-right,.js-fade-left').each(function(){
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > pos - windowHeight + 100){
          $(this).addClass('scroll');
        }
      });
    });
  });

});

