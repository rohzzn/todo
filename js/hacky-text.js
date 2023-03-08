// https://codepen.io/ivandaum/pen/WRxRwv
const titles = [
    {
      id: "welcome-title",
      en: "WELCOME",
      jp: "おそた"
    },
    {
      id: "about-title",
      en: "ABOUT",
      jp: "きし"
    },
    {
      id: "mission-title",
      en: "MISSION",
      jp: "ミッション"
    },
    {
      id: "community-title",
      en: "COMMUNITY",
      jp: "ヴィジョン"
    },
    {
      id: "chapter-list-title",
      en: "CHAPTER LIST",
      jp: "チャプターリスト"
    },
    {
      id: "roadmap-title",
      en: "ROADMAP",
      jp: "ロードマップ"
    },
    {
      id: "meet-team-title",
      en: "THE TEAM",
      jp: "チームに会う"
    },
    {
      id: "launch-tsuki-title",
      en: "LAUNCH TSUKI",
      jp: "月を起動"
    },
    {
      id: "platform-reveal-title",
      en: "PLATFORM REVEAL",
      jp: "プラットフォーム公開"
    },
    {
      id: "main-collection-title",
      en: "MAIN COLLECTION",
      jp: "主なコレクション"
    },
    {
      id: "staking-tokenomics-title",
      en: "STAKING & TOKENOMICS",
      jp: "スタッキングとトークノミクス"
    },
    {
      id: "x-dao-title",
      en: "X DAO",
      jp: "×ダオ"
    },
    {
      id: "art-collabs-title",
      en: "ART COLLABS",
      jp: "アートコラボ"
    },
    {
      id: "kitsune-store-title",
      en: "KITSUNE STORE",
      jp: "きつねストア"
    },
    {
      id: "easyx-official-title",
      en: "EasyX OFFICIAL BETA LAUNCH",
      jp: "EasyX 公式ベータ版のリリース"
    }
  
    
  ];
  
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomLetterEn() {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    return alphabet[rand(0, alphabet.length - 1)]
  }
  
  function getRandomLetterJp() {
    let alphabet = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん']
    return alphabet[rand(0, alphabet.length - 1)]
  }
  
  function getRandomWordEn(word) {
    let finalWord = ''
    for (let i = 0; i < word.length; i++) {
      finalWord += word[i] == ' ' ? ' ' : getRandomLetterEn()
    }
  
    return finalWord
  }
  
  function getRandomWordJp(word) {
    let finalWord = '';
    for (let i = 0; i < word.length; i++) {
      finalWord += word[i] == ' ' ? ' ' : getRandomLetterJp();
    }
    
    return finalWord;
  }
  
  titles.forEach(title => {
    let word = document.getElementById(title.id)
  
    let interv = 'undefined'
    let canChange = false
    let globalCount = 0
    let count = 0
    // let INITIAL_WORD = word.innerHTML.replace(/\s/g, '').replace(/\r?\n|\r/g, '');
    let INITIAL_WORD = title.jp;
    let FINAL_WORD = title.en;
    let isGoing = false
  
    function init() {
      if (isGoing) return;
  
      isGoing = true
      var randomWord = getRandomWordJp(FINAL_WORD);
      word.innerHTML = randomWord;
  
      interv = setInterval(function () {
        var finalWord = ''
        for (var x = 0; x < FINAL_WORD.length; x++) {
          if (x <= count && canChange) {
            finalWord += FINAL_WORD[x]
          } else {
            finalWord += getRandomLetterJp()
          }
        }
        word.innerHTML = finalWord
        if (canChange) {
          count++
        }
        if (globalCount >= 20) {
          canChange = true
        }
        if (count >= FINAL_WORD.length) {
          clearInterval(interv)
          count = 0
          canChange = false
          globalCount = 0
          isGoing = false
        }
        globalCount++
      }, 50)
  
    }
  
    function finish() {
      if (isGoing) return;
  
      isGoing = true
      var randomWord = getRandomWordEn(INITIAL_WORD)
      word.innerHTML = randomWord
  
      interv = setInterval(function () {
        var finalWord = ''
        for (var x = 0; x < INITIAL_WORD.length; x++) {
          if (x <= count && canChange) {
            finalWord += INITIAL_WORD[x]
          } else {
            finalWord += getRandomLetterJp()
          }
        }
        word.innerHTML = finalWord
        if (canChange) {
          count++
        }
        if (globalCount >= 20) {
          canChange = true
        }
        if (count >= INITIAL_WORD.length) {
          clearInterval(interv)
          count = 0
          canChange = false
          globalCount = 0
          isGoing = false
        }
        globalCount++
      }, 50)
  
    }
  
    if (word) {
      word.addEventListener('mouseover', init);
      word.addEventListener('mouseout', finish);
    }
  })
  
  
  
  
  