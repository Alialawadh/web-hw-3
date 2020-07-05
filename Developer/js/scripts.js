//  first mission
// <!-- .في هذه المهمة، ستقوم بإنشاء نظام توظيف
//      .ستطرح على المستخدم بعض الأسئلة، واعتمادًا على إجاباته، ستقبل مقدم الطلب أو ترفضه -->

// <!-- :لقبول المتقدم للوظيفة يجد أن تتوفر فيه ثلاث شروط  -->

// <!-- أن يكون عمره أكبر من 25 وأقل من 40 -->
// <!-- أن تكون عنده سنوات خبرة تزيد عن 3 سنوات -->
// <!-- أن تكون إحدى لغات البرمجة التي يبرمج بها المتقدم للوظيفة
//      هي لغة البرمجة المطلوبة من قبل البرنامج -->

// <!-- قم بكتابة السطور البرمجية اللازمة
//      qu1.mov للحصول على النتيجة الموضحة في الفيديو -->

// <!-- 🔥بونص المهمة الأولى -->
// <!-- قم ببناء واجهة تستقبل المدخلات من المستخدم عن طريق حقول إدخال
//      وإظهار النتائج على الصفحة -->
console.log("مرحبا بك في برنامج توظيف المبرمجين");

function callName() {
  let name = document.getElementById("name").value;

  let age = document.getElementById("age").value;

  let experince = document.getElementById("experince").value;

  let knowledge = document.getElementById("PL").value;

  let knowledge2 = document.getElementById("PL2").value;

  if (
    age > 25 &&
    age < 40 &&
    experince > 3 &&
    (knowledge == "1" || knowledge == "2" || knowledge == "3") &&
    (knowledge2 == "1" || knowledge2 == "2" || knowledge2 == "3")
  ) {
    console.log("تهانيا" + name + " " + "لقد قبلت وانت مبرمج معنا");
  } else {
    console.log("يا للاسف " + " " + name + " " + "لم تنقبل معنا");
  }
  array43.push({
    name: name,
    age: age,
    experince: experince,
    knowledge: knowledge,
    knowledge2: knowledge2,
  });
  console.log(array43);
}

let m9fofa = ["HTML", "CSS", "javascript", "swift", "pyhton"];

let i;

for (i = 0; i < m9fofa.length; i++) {
  console.log(i + 1 + ". " + m9fofa[i]);
}

let array43 = [];

for (any of array43) {
}

// second mission
//   <!-- consoleقم بكتابة دالة تستقبل مصفوفة من درجات الحرارة وتقوم بطباعتها في ال -->
//   <!-- classwork في ال logger() تذكر دالة -->

function logger(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
  }
}

// <!-- قم بكتابة دالة تستقبل مصفوفة من درجات الحرارة بالفهرنهايت
//      وترجع مصفوفة بهذه القيم محولة إلى المقياس السيليزي -->
// <!-- C = (F - 32) * (5/9) استخدم العملية -->

function toCel(temperatures) {
  for (let i = 0; i < temperatures.length; i++) {
    result_array.push(parseInt(temperatures[i] - 32) * (5 / 9));
  }
  return result_array;
}

// //  <!-- قم بكتابة دالة تستقبل مصفوفة من درجات بالمقيا السيليزي وقيمة مبدئية/أولية
// وتقوم بإرجاع مصفوفة من درجات الحرارة الأكبر من القيمة المبدئية -->
// <!-- classwork في ال hottestDays() تذكر دالة -->

function hottesDay(temperatures, min_value) {
  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > min_value) {
      hot.push(temperatures[i]);
    }
  }
  return hot;
}

// // <!-- قم بكتابة دالة تستقبل مصفوفة من درجات الحرارة وقيمة مبدئية بالفهرنهايت -->
// <!-- console وتقوم بطباعة درجات الحرارة الأكبر من القيمة المبدئية بالسيليزي في ال -->

let feh_temp_array = [32, 70, 99, 106];
let threshhold = 70;
let hot = [];
let result_array = [];

function loghottesDays(input_array, min_value) {
  logger(toCel(hottesDay(input_array, min_value)));
}

loghottesDays(feh_temp_array, threshhold);

// <!-- المهمة الثالثة -->

// <!-- في هذه المهمة ستقوم بإنشاء حاسبة درجات -->

// <!-- تستقبل الآلة الحاسبة درجاتك في من خلال حقول إدخال -->
// <!--
//     quizes      /10
//     midterm     /25
//     final test  /50
//     oral        /15
// -->

// <!-- تقوم الآلة الحاسبة بإجراء الحسابات اللازمة لحساب مجموع درجاتك بحيث -->
// <!--
//     90 - 100                  A
//     أكبر من أو يساوي 80      B
//     أكبر من أو يساوي 70      C
//     أكبر من أو يساوي 60      D
//     عدا ذلك                   F
// -->

function mis3() {
  let quiz = document.getElementById("PL3").value;
  let med = document.getElementById("PL4").value;
  let final = document.getElementById("PL5").value;
  let oral = document.getElementById("PL6").value;
  let calculation =
    parseInt(quiz) + parseInt(med) + parseInt(final) + parseInt(oral);
  document.getElementById("calbutton").innerHTML = calculation;

  let letter;

  if (calculation > 90) {
    letter = "A";
  } else if ((calculation < 90, calculation >= 80)) {
    letter = "B";
  } else if ((calculation < 80, calculation >= 70)) {
    letter = "C";
  } else if ((calculation < 70, calculation >= 60)) {
    letter = "D";
  } else {
    letter = "F";
  }
  document.getElementById("letter").innerHTML = letter;
}

// <!-- ثم يظهر مجموعك النهائي على الصفحة
//      A, B, C, D or F مع درجتك بالحروف -->

// <!-- 🔥بونص المهمة الثالثة -->
// <!-- قم بجعل المستخدم يدخل درجاته دفعة
//      وكتابة فاصلة بين كل درجة ودرجة
//      task3 فتصبح بحاجة إلى استخدام حقل إدخال واحد فقط كما في الصورة -->

// <!-- A, B, C, D or F مميز في الصفحة لكل درجة GIF قم بإدراج -->

// <!-- HTML and CSS قم بإنشاء التصميم الخاص بك للموقع من خلال لغتي -->
