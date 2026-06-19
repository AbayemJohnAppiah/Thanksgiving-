function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const family_name = ["Dominic", "Gifty", "Abigail", "Paulina", "Selom", "Parr"];

const course_mate = [
    "Maxwell", "Habiba", "Cheryl", "Courage", "David", "Pious",
    "Jessica", "Richmond", "Kelvin", "Beyonce", "Tricia",
    "Malik", "Gideon", "Isaac", "Kofi", "Godfred", "Kwaku", "Richard"
];

function showMessage() {

    let user_name = document.getElementById("fullName").value.toLowerCase().trim();
    let option = document.getElementById("option").value.toLowerCase();

    let popup = document.getElementById("popup");
    let message = document.getElementById("popup-message");

    let words = user_name.split(" ");

    const familyNames = family_name.map(name => name.toLowerCase());
    const courseNames = course_mate.map(name => name.toLowerCase());

    // Empty name
    if (user_name === "") {
        message.innerHTML = `
      <h2>Error</h2>
      <p>Please enter your full name.</p>
    `;
        popup.style.display = "flex";
        return;
    }

    // Empty relationship
    if (option === "") {
        message.innerHTML = `
      <h2>Hello ${titleCase(user_name)}</h2>
      <p>Please select Family or Coursemate.</p>
    `;
        popup.style.display = "flex";
        return;
    }

    // ================= FAMILY =================

    if (option === "family") {

        if (words.includes("dominic")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Today is a special day, so I want to take a moment to say thank you 🙏. 
            Thank you for standing up for the family 👨‍👩‍👦‍👦💪.<br>Thank you for fighting for my life when I couldn't fight for myself ❤️‍🩹. Thank you for always showing up for me, every single time 🫂. 
            I'm truly grateful for everything 🙌. You changed the whole direction of my life.<br> 
            You've been with me since JHS 📚, through SHS 🎓, and all the way to university 🎓. Even after all my failures and disappointments 😔💔, you never walked away. You gave me chances again and again because you believed in me when I didn't believe in myself.<br>   
            There was a time I wanted to quit school and chase football full-time ⚽. But you saw more in me. You pushed me, guided me, and gave me another shot at university 📖✍️. I'll never forget that 🥹.<br> 
            Thank you for your love ❤️, your patience, your encouragement, and your endless support through this whole journey.<br><br> 
            May God bless you richly <i>Mr. ${titleCase(user_name)}</i>, and your beautiful wife, Ms. Parr 💍. You both are a blessing to me ❤️🙏🏻
      </p>
      `;

        }

        else if (words.includes("gifty")) {

            message.innerHTML = `
      <h2><i>Good day Mrs. ${titleCase(user_name)}!</i></h2>

      <p>
            Today is a special day, so I just want to pause and say thank you, <i>Mrs. ${titleCase(user_name)}</i> ❤️  
            Thank you for standing up for the family 👨‍👩‍👧‍👦. Thank you for fighting for my life when I was too weak to fight for myself 🫂. Thank you for always showing up for me, no matter the time or situation.<br>  
            I'm so grateful for you, <i>Mrs. ${titleCase(user_name)}</i> 🙏. You literally changed the whole direction of my life.<br> 
            You've been with me since JHS 📚, through SHS 🎓, all the way to university 🏛️. Even when I messed up and disappointed myself, you never gave up on me 😔. You kept giving me chances because you believed in me when I didn't believe in myself.<br>   
            There was a time I wanted to drop school and just chase football ⚽. But you saw more in me. You pushed me, corrected me, prayed for me, and gave me another chance at university 📖. I'll never forget that, <i>Mrs. ${titleCase(user_name)}</i> 🥹.<br> 
            Thank you for your love ❤️, your patience ⏳, your tough love when I needed it, and your endless support through this whole journey.<br><br>  
            May God bless you richly, <i>Mrs. ${titleCase(user_name)}</i>, your boys Ethan and Nathan 👦👦, and your handsome husband Mr. Amouzou Selom. You all are a blessing to me and I'm so proud to call you my sister ❤️
      </p>
      `;
        }

        else if (words.includes("abigail")) {

            message.innerHTML = `
      <h2><i>Good day Ms. ${titleCase(user_name)}!</i></h2>

      <p>
            Today is a special day, so I just had to take a moment and say thank you, <i>Ms. ${titleCase(user_name)}</i>❤️  
            Thank you for always standing up for the family 👨‍👩‍👧‍👦.<br> Thank you for fighting for my life when I didn't have the strength to fight for myself 🫂. Thank you for showing up for me, every single time, no excuses.<br>  
            I'm so grateful for you 🙏. You changed the whole direction of my life, <i>Ms. ${titleCase(user_name)}</i>.
            You've been there with me through university 📚🎓. Even when I messed up, you never gave up on me. You kept giving me chances again and again because you believed in me when I didn't even believe in myself.<br>  
            Thank you for your love ❤️, your patience ⏳, your encouragement when I was down, and your endless support through this whole journey.<br><br>
            May God bless you richly, <i>Ms. ${titleCase(user_name)}</i> 🙏 and your future husband. You're a blessing to me and I'm so proud God gave me a sister like you ❤️
      </p>
      `;
        }

        else if (words.includes("paulina")) {

            message.innerHTML = `
      <h2><i>Good day Ms. ${titleCase(user_name)}!</i></h2>

      <p>
            Today is a special day, so I just want to pause and say thank you, my big sister 👑❤️  
            Thank you for standing up for our family when no one else could. Thank you for fighting for my life when I was too weak to fight for myself 🫂. Thank you for always showing up for me, every single time, no matter what.<br>  
            I'm truly grateful for you, <i>Ms. ${titleCase(user_name)}</i> 🙏. You didn't just change my life — you changed the whole direction of our family.<br>
            You've been with me since JHS 📚, through SHS 🎓, and all the way to university 🏛️. Even after all my failures and disappointments, you never walked away. You gave me chances again and again because you believed in me when I didn't believe in myself.<br>
            There was a time I wanted to quit school and chase football full-time ⚽. But you saw more in me. You pushed me, guided me, corrected me, and gave me another shot at university 📖. I'll never forget that, <i>Ms. ${titleCase(user_name)}</i> 🥹.<br>
            Thank you for being mother and father to us all at the same time 🤱👨‍👦. Thank you for your love ❤️, your patience, your tough love, your sacrifices, and your endless support through this whole journey.  
            You took our family to this place with your own hands 💪.<br><br>  
            May God bless you richly, <i>Ms. ${titleCase(user_name)}</i> 🙏. You're our hero, our covering, and I'm so proud to call you my big sister ❤️
      </p>
      `;
        }

        else if (words.includes("selom")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            <i>Mr. ${titleCase(user_name)}</i>, I just want to take a moment to say thank you 🙏  
            Thank you for being my role model, my lecturer, my mentor, and my motivational leader all in one 📚.<br>  
            The way you teach, the way you carry yourself, and the way you push people to be better has changed me 💪. Your words always give me direction when I'm confused, and your life teaches me discipline, vision, and strength even more than your lectures 📖.<br>
            Thank you for the guidance, the corrections, the motivation, and for believing in me when I doubted myself.<br><br>  
            May God bless you richly, and may He keep increasing you in wisdom, health, and favor 🙏. You're not just Mrs. Gifty's husband — you're a blessing to our whole family and my personal hero 👨‍🏫❤️
            <br>
            Still I'm the Boss 🎮😝
      </p>
      `;
        }

        else if (words.includes("parr")) {

            message.innerHTML = `
      <h2><i>Good day Mrs. ${titleCase(user_name)}!</i></h2>

      <p>
            <i>Mrs. ${titleCase(user_name)}</i>, welcome to the Abayem family ❤️🙏  
            We appreciate you and we honor you greatly. Thank you for standing with Mr. Dominic with love, patience, and support.<br>  
            Your presence brings peace and strength to his work, and for that we are truly grateful 🤝.  
            We celebrate the good heart you carry and the positive impact you make around you.<br><br>  
            May God bless you richly, keep you in good health, and reward every good thing you do 🙏.  
            May your home be filled with joy, favor, and abundant peace.<br>  
            We are glad to have you with us. You are truly welcome, ma’am 🎉
      </p>
      `;
        }

        else if (!words.some(word => familyNames.includes(word))) {

            message.innerHTML = `
      <h2>${titleCase(user_name)}</h2>

      <p>
      You are not a family member 🥹<br>
      Try again.
      </p>
      `;
        }
    }

    // ================= COURSEMATE =================

    else if (option === "coursemate") {

        if (words.includes("maxwell")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            <i>Mr. ${titleCase(user_name)}</i>, I want to take a moment to say thank you 🙏  
            Thank you for standing up for our class, for fighting for us when we couldn't speak for ourselves, and for always showing up every single time 🫂.<br>  
            Leading a whole class isn't easy, but you did it with patience, responsibility, and heart ❤️. You kept us informed, you carried our concerns, and you made sure no one was left behind.<br> 
            Thank you for the notes you shared, the encouragement during exams, and for always having my back in class 📚. 
            You made the stress lighter and the journey more fun 🤝😄. 
            Thank you for your friendship, your patience, and for pushing me to do better even when I wanted to give up 💪.<br><br>   
            Thank you for your service, your sacrifice, and your leadership. May God bless you richly with wisdom, strength, and favor 🙏. Our class is better because of you, and I'm truly grateful <i>${titleCase(user_name)}</i> ❤️ 
      </p>
      `;
        }

        else if (words.includes("habiba")) {

            message.innerHTML = `
      <h2><i>Good day Ms. ${titleCase(user_name)}!</i></h2>

      <p>
            Today I just want to say thank you, <i>${titleCase(user_name)}</i> 🙏.Thank you for the teamwork, the shared notes, and the encouragement during tough weeks 📚💪. 
            School would've been way harder without you.<br>  You make learning lighter and the stress more bearable 🤝😄. 
            Thank you for your friendship, your patience, and for always showing up when it matters.<br><br> 
            May Allah bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you've done for me ❤️. I'm truly grateful for you. 
      </p>
      `;
        }

        else if (words.includes("cheryl")) {

            message.innerHTML = `
      <h2><i>Good day Ms. ${titleCase(user_name)}!</i></h2>

      <p>
            Today is a special day and I just have to say thank you to you <i>Ms. ${titleCase(user_name)}</i>❤️  
            Thank you for being my best course mate, my learning partner, and my motivation all in one 📚.<br> 
            Thank you for the notes you share, the way you explain things when I'm lost, and for pushing me to study harder even when I feel lazy 📝💪.<br> 
            Studying with you makes everything lighter. You bring energy, focus, and calm to the journey 🤝. 
            Beyond books, thank you for your kindness, your patience, and for always encouraging me. You inspire me to be better — in class and in life.<br><br> 
            May God bless you richly <i>Ms. ${titleCase(user_name)}</i>!, and reward you for every good thing you do 🙏. I'm truly grateful you're in my class and in my life.
            <br><br>
            Still LOVE YOU ❤️🥹 <br>
            Lecturer's wife🤭, who am I?.
      </p>
      `;
        }

        else if (words.includes("courage")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Today is a special day, so I have to say thank you, God-Father 🙏❤️  
            Thank you for standing by me through every lecture, every assignment, and every “we're not ready for this test” moment 📚😂.<br>  
            Thank you for sharing your notes when mine were a mess, for explaining things when I was confused, and for encouraging me when I wanted to give up 📝.<br>  
            You didn't just make school easier — you made it worth it 🤝. You turned stress into laughter, pressure into teamwork, and a course mate into family 🫂.
            Thank you for your loyalty, your patience, your real talk, and for always pushing me to be better 💪.<br><br> 
            May God bless you richly <i>${titleCase(user_name)}</i>, and pay you back for every good thing you've done for me 🙏. I'm so grateful God put you in my class, God-Father ❤️🎓
            <br>
            We are family🤭
      </p>
      `;
        }

        else if (words.includes("david")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Today I just need to say thank you, my brother 🙏❤️  
            Thank you for being my best course mate, my study partner, and my strength when I was at my lowest 🫂.<br>   
            You didn't just share notes and deadlines with me — you shared your shoulder when I was tired, your words when I was discouraged, and your hope when I felt like giving up 📚💪.<br>   
            You showed up for me in class, and more importantly, you showed up for me in life.  
            Thank you for your loyalty, your patience, and for never letting me face the hard days alone. You turned “course mate” into “family” 🤝.<br><br>   
            May God bless you richly <i>${titleCase(user_name)}</i>, and pay you back for every time you lifted me up 🙏. I'm grateful God gave me a brother in you, not just a classmate.  
            I've got your back too, always. More wins for us together 🎓❤️
      </p>
      `;
        }

        else if (words.includes("pious")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Today I just need to say thank you, my brother 🙏❤️  
            Thank you for being my best course mate, my study partner, and my strength when I was at my lowest 🫂.<br>   
            You didn't just share notes and deadlines with me — you shared your shoulder when I was tired, your words when I was discouraged, and your hope when I felt like giving up 📚💪.  
            You showed up for me in class, and more importantly, you showed up for me in life.<br>   
            Thank you for your loyalty, your patience, and for never letting me face the hard days alone. You turned “course mate” into “family” 🤝.<br><br>    
            May God bless you richly <i>${titleCase(user_name)}</i>, and pay you back for every time you lifted me up 🙏. I'm grateful God gave me a brother in you, not just a classmate.  
            I've got your back too, always. More wins for us together 🎓❤️
      </p>
      `;
        }

        else if (words.includes("jessica")) {

            message.innerHTML = `
      <h2><i>Good day Ms. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.<br><br>
            May Allah bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
      </p>
      `;
        }

        else if (words.includes("richmond")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.<br>
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.<br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
            <br>
            Kasoa Boy 😅
      </p>
      `;
        }

        else if (words.includes("kelvin")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.<br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
      </p>
      `;
        }

        else if (words.includes("beyonce")) {

            message.innerHTML = `
      <h2><i>Good day Ms. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
            <br>
            You don't like coming to class at all 😀😏
      </p>
      `;
        }

        else if (words.includes("tricia")) {

            message.innerHTML = `
      <h2><i>Good day Ms. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
      </p>
      `;
        }

        else if (words.includes("malik")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May Allah bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
      </p>
      `;
        }

        else if (words.includes("gideon")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
            <br>
            Always you vex, Who you be!!?? 😂
            <br>
            Always you dey get banned, who you be!!?? 😝
      </p>
      `;
        }

        else if (words.includes("isaac")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
            <br>
            Always traffic 😅
      </p>
      `;
        }

        else if (words.includes("kofi")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
            <br>
            Stop sleeping in class😂
      </p>
      `;
        }

        else if (words.includes("godfred")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
            <br>
            ON GOD🙌🏼
      </p>
      `;
        }

        else if (words.includes("kwaku")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
      </p>
      `;
        }

        else if (words.includes("richard")) {

            message.innerHTML = `
      <h2><i>Good day Mr. ${titleCase(user_name)}!</i></h2>

      <p>
            Hi, today I just want to say thank you <i>${titleCase(user_name)}</i>🙏
            Thank you for the cooperation in class, for sharing updates, and for making group work easier 📚🤝.
            Your presence in our course has made the journey smoother. I appreciate your time, your effort, and your good spirit.
            <br><br>
            May God bless you richly <i>${titleCase(user_name)}</i>, and reward you for every good thing you do ❤️. Wishing you success and favor this season and beyond 🎓
            <br>
            You don't like coming to class at all😅
      </p>
      `;
        }

        else if (!words.some(word => courseNames.includes(word))) {

            message.innerHTML = `
      <h2>Hello ${titleCase(user_name)}!</h2>

      <p>
      Thank you for being part of the journey 📚❤️.
      May God bless you richly.
      </p>
      `;
        }
    }

    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
