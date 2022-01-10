function displayNone(ele) {
  ele.classList.remove('d-block');
  ele.classList.add('d-none');
}

function displayBlock(ele) {
  ele.classList.remove('d-none');
  ele.classList.add('d-block');
}

const config = {
  topPage: document.getElementById('top-page'),
  omikujiPage: document.getElementById('omikuji-page'),
};

class Omikuji {
  constructor() {
    this.fortune = this.getFortune(getRandomNumber(10)); // string
    this.description = this.getDescription(this.fortune); // string
    this.fileNameOfImage = this.getFileNameOfImage(this.fortune); // string
    this.luckyLang = this.getLuckyLang(getRandomNumber(8)); // string
    this.luckyDB = this.getLuckyDB(getRandomNumber(5)); // string
    this.luckyEditor = this.getLuckyEditor(getRandomNumber(5)); // string
  }

  getFortune(number) {
    let fortune = '';
    switch (number) {
      case 0:
        fortune = '大吉';
        break;
      case 1:
        fortune = '吉';
        break;
      case 2:
        fortune = '吉';
        break;
      case 3:
        fortune = '小吉';
        break;
      case 4:
        fortune = '小吉';
        break;
      case 5:
        fortune = '末吉';
        break;
      case 6:
        fortune = '末吉';
        break;
      case 7:
        fortune = '凶';
        break;
      default:
        fortune = '中吉';
        break;
    }

    return fortune;
  }

  getDescription(fortune) {
    let description = '';
    switch (fortune) {
      case '大吉':
        description =
          'リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気付かないでしょう。見なかったことにするのが吉。';
        break;
      case '吉':
        description =
          'リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。';
        break;
      case '中吉':
        description =
          'リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。';
        break;
      case '小吉':
        description =
          'リリース前のソフトウェアにバグが見つかります。貴方のお勤め先が上流の企業ならばそれほど大きな問題にはなりませんが、三次請けよりも下流の場合はご愁傷様でございます。';
        break;
      case '末吉':
        description =
          'リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。';
        break;
      case '凶':
        description =
          'リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。';
        break;
    }

    return description;
  }

  getFileNameOfImage(fortune) {
    let fileNameOfImage = '';
    switch (fortune) {
      case '大吉':
        fileNameOfImage = 'dance_yorokobi_mai_woman.png';
        break;
      case '吉':
        fileNameOfImage = 'pose_dance_ukareru_woman.png';
        break;
      case '中吉':
        fileNameOfImage = 'pose_genki09_businessman.png';
        break;
      case '小吉':
        fileNameOfImage = 'businessman1_nayami.png';
        break;
      case '末吉':
        fileNameOfImage = 'sick_kaoiro_man.png';
        break;
      case '凶':
        fileNameOfImage = 'pose_ochikomu_businessman.png';
        break;
    }

    return fileNameOfImage;
  }

  getLuckyLang(number) {
    let luckyLang = '';
    switch (number) {
      case 0:
        luckyLang = 'C++';
        break;
      case 1:
        luckyLang = 'Java';
        break;
      case 2:
        luckyLang = 'Python';
        break;
      case 3:
        luckyLang = 'PHP';
        break;
      case 4:
        luckyLang = 'TypeScript';
        break;
      case 5:
        luckyLang = 'Ruby';
        break;
      case 6:
        luckyLang = 'C♯';
        break;
      default:
        luckyLang = 'JavaScript';
        break;
    }

    return luckyLang;
  }

  getLuckyDB(number) {
    let luckyDB = '';
    switch (number) {
      case 0:
        luckyDB = 'Oracle Database';
        break;
      case 1:
        luckyDB = 'SQL Server';
        break;
      case 2:
        luckyDB = 'DB2';
        break;
      case 3:
        luckyDB = 'PostgreSQL';
        break;
      default:
        luckyDB = 'MySQL';
        break;
    }

    return luckyDB;
  }

  getLuckyEditor(number) {
    let luckyEditor = '';
    switch (number) {
      case 0:
        luckyEditor = 'Emacs';
        break;
      case 1:
        luckyEditor = 'Vim';
        break;
      case 2:
        luckyEditor = 'Atom';
        break;
      case 3:
        luckyEditor = 'nano';
        break;
      default:
        luckyEditor = 'Visual Studio Code';
        break;
    }

    return luckyEditor;
  }
}

function goToOmikujiPage(omikuji) {
  displayNone(config.topPage);
  displayBlock(config.omikujiPage);
  config.omikujiPage.append(createOmikujiPage(omikuji));
}

function backToTopPage() {
  displayNone(config.omikujiPage);
  displayBlock(config.topPage);
  config.omikujiPage.innerHTML = '';
}

function createOmikujiPage(omikuji) {
  const container = document.createElement('div');
  container.classList.add('overflow-scroll', 'p-2');

  const omikujiFrame = document.createElement('div');
  omikujiFrame.classList.add(
    'omikuji',
    'bg-white',
    'd-flex',
    'justify-content-start',
    'align-items-center',
    'flex-column',
    'my-3'
  );

  omikujiFrame.innerHTML = `
            <div>
              <h5 class="text-danger yuji-syuku pt-3">
                ソフトウェア開発みくじ
              </h5>
            </div>
            <div>
              <hr class="line-red" />
              <img class="illust" src="images/${omikuji.fileNameOfImage}" />
              <h1 class="fortune text-danger yuji-syuku text-center">${omikuji.fortune}</h1>
              <hr class="line-red" />
            </div>
            <div>
              <p class="text-danger yuji-syuku p-3">
                ${omikuji.description}
              </p>
            </div>
            <div class="mb-3">
              <hr class="line-red" />
              <p class="text-danger yuji-syuku text-center">✿ ラッキー言語 ✿</p>
              <h5 class="text-danger yuji-syuku text-center">${omikuji.luckyLang}</h5>
              <hr class="line-red" />
              <p class="text-danger yuji-syuku text-center">
                ✿ ラッキーデータベース ✿
              </p>
              <h5 class="text-danger yuji-syuku text-center">${omikuji.luckyDB}</h5>
              <hr class="line-red" />
              <p class="text-danger yuji-syuku text-center">
                ✿ ラッキーエディタ ✿
              </p>
              <h5 class="text-danger yuji-syuku text-center">
                ${omikuji.luckyEditor}
              </h5>
            </div>
            <div class="mb-3">
              <button
                id="re-draw-omikuji"
                type="button"
                class="btn btn-danger rounded-pill yuji-syuku"
              >
                もう一度おみくじを引く
              </button>
            </div>
`;

  omikujiFrame
    .querySelectorAll('#re-draw-omikuji')[0]
    .addEventListener('click', function () {
      backToTopPage();
    });

  container.append(omikujiFrame);

  return container;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function drawOmikuji() {
  let omikuji = new Omikuji();
  goToOmikujiPage(omikuji);
}
