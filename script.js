// NewFile.js — יוצר את הלוח ומחבר את הבקרים
const board = document.getElementById('board');
const wrapper = document.getElementById('boardWrapper');

const persp = document.getElementById('persp');
const rx = document.getElementById('rx');
const ry = document.getElementById('ry');
const resetBtn = document.getElementById('reset');

const perspVal = document.getElementById('perspVal');
const rxVal = document.getElementById('rxVal');
const ryVal = document.getElementById('ryVal');

const files = ['א','ב','ג','ד','ה','ו','ז','ח']; // תוויות לדוגמה בעברית (אפשר לשנות)
const ranks = ['8','7','6','5','4','3','2','1'];

// פונקציה לבניית הלוח (8x8)
function buildBoard(){
  board.innerHTML = '';
  for(let r=0; r<8; r++){
    for(let f=0; f<8; f++){
      const sq = document.createElement('div');
      sq.classList.add('square');
      // צבע לפי parity
      if((r + f) % 2 === 0) sq.classList.add('light');
      else sq.classList.add('dark');

      // הוספת קואורדינטה פנימית
      const coord = document.createElement('span');
      coord.className = 'coord';
      coord.textContent = files[f] + ranks[r];
      sq.appendChild(coord);

      // אפשר להציג סימן באמצע (ריק כברירת מחדל)
      // sq.textContent = ''; // או '♟' כדי לבדוק

      // לחיצה מסמנת/מסירה סימון
      sq.addEventListener('click', () => {
        sq.classList.toggle('marked');
      });

      board.appendChild(sq);
    }
  }
}

// פונקציה לעדכון transform לפי הסליידרים
function updateTransform(){
  const px = parseInt(rx.value,10);
  const py = parseInt(ry.value,10);
  board.style.transform = `rotateX(${px}deg) rotateY(${py}deg)`;
  wrapper.style.perspective = `${persp.value}px`;

  // עדכון תצוגת ערכים לצד הסליידרים
  perspVal.textContent = persp.value;
  rxVal.textContent = rx.value;
  ryVal.textContent = ry.value;
}

// לחצני אירועים
persp.addEventListener('input', updateTransform);
rx.addEventListener('input', updateTransform);
ry.addEventListener('input', updateTransform);

resetBtn.addEventListener('click', () => {
  persp.value = 800;
  rx.value = 30;
  ry.value = 0;
  updateTransform();
});

// אתחול
buildBoard();
updateTransform();
