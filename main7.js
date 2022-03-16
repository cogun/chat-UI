function genIcons() {
    var icons = ["fa fa-bolt", "fa fa-home", "fa fa-box", "fa fa-fire", "fa fa-heart"]
    var colors = ["bg-red-500", "bg-blue-400", "bg-yellow-500", "bg-cyan-600", "bg-green-600"]
    for (let i = 0; i < icons.length; i++) {
        $(".first").append(`
        <div class="icon-border ${i == 1 ? "border-2" : ""} w-11 border-white rounded-xl p-1 my-2">
                <div class="icons text-white text-md flex justify-center items-center rounded-lg ${colors[i]} h-8 w-8">
                    <i class="fa ${icons[i]}"></i>
                </div>
            </div>
        `);

    }
}

function getChatTiles() {
    var data = [
        {
            name: "Darrel & Arlene",
            msg: "i am lookit for it.",
            time: "11:41 AM",
            photo: "colors"
        },
        {
            name: "Arlene",
            msg: "hey Arlene Wassup.",
            time: "00:42 AM",
            photo: "random"
        },
        {
            name: "Cogun x",
            msg: "Yes! u r right.",
            time: "1:20 AM",
            photo: "dark"
        },
        {
            name: "Assel zox",
            msg: "Nice",
            time: "9:41 PM",
            photo: "sky"
        },
        {
            name: "Punit Verma 2",
            msg: "Photos.",
            time: "11:41 AM"
        },
        {
            name: "College Group",
            msg: "notice ...",
            time: "3:54 AM",
            photo: "winter"
        },
    ]
    data.forEach(i => {
        $(".chat-tiles").append(`
                <div class="border-b border-slate-800 capitalize chat-tile flex justify-center items-center p-3 hover:bg-slate-800 cursor-pointer">
                    <img src="https://source.unsplash.com/40x40/?${i.photo}" alt="" class="mr-2 rounded-lg">
                    <div class="chat-tile-text grow">
                        <p class="font-medium text-sm chat-person-name text-slate-200 p-0 m-0">
                            ${i.name}
                        </p>
                        <p class="chat-recent-msg text-slate-400 text-xs p-0 m-0">
                            You : ${i.msg}
                        </p>
                    </div>
                    ${i.photo == 'colors' ? '<div class="mx-2 font-medium noti text-xs px-2 py-1 text-slate-100 bg-cyan-600 rounded-full">36</div > ' : ''}
                    <div class="chat-time text-xs p-0 m-0 text-slate-400">
                        <p>${i.time}</p>
                    </div>
                </div>
        `)
    });

}
getChatTiles()
getChatTiles()
genIcons()


$(".icon-close").click(function (e) {
    e.preventDefault();
    $(".first").hide()
    $(".second").css("grid-column", "span 2 / span 2")
    $(".third").css("grid-column", "span 3 / span 3")
    $(".fourth").css("grid-column", "span 7 / span 7")
    $(".layout").css("grid-template-columns", "repeat(12, minmax(0, 1fr))")
    $(".icon-close").toggleClass("hidden")
    $(".icon-plus").toggleClass("hidden")
});

$(".icon-plus").click(function (e) {
    e.preventDefault();
    $(".first").show()
    $(".second").css("grid-column", "")
    $(".third").css("grid-column", "")
    $(".fourth").css("grid-column", "")
    $(".layout").css("grid-template-columns", "")
    $(".icon-close").toggleClass("hidden")
    $(".icon-plus").toggleClass("hidden")
});

var tl = gsap.timeline(
    {
        repeat: 0,
    }
);
tl.from(".icon-border", { x: -1000, duration: 2 });
tl.to(".icon-border", {
    x: 0,
    ease: "power2.inOut",
    stagger: 0.1
});

$(".chat-tile").click(function (e) {
    e.preventDefault();
    $(".first").css("z-index", "0");
    $(".fourth").css("z-index", "999");
    $(".fourth").css("width", "100%");
});

$(".chips").click(function (e) {
    e.preventDefault();
    $(".third").css("z-index", "0");
    $(".second").css("z-index", "999");
    $(".second").css("width", "100%");
});

$(".back").click(function (e) {
    e.preventDefault();
    $(".fourth").css("z-index", "0");
    $(".second").css("z-index", "999");
    $(".second").css("width", "100%");
});

$(".forward").click(function (e) {
    e.preventDefault();
    $(".second").css("z-index", "0");
    $(".third").css("z-index", "999");
    $(".third").css("width", "100%");
});

$(".option-tile").click(function (e) {
    e.preventDefault();
    $(".second").css("z-index", "0");
    $(".first").css("z-index", "999");
    $(".first").css("width", "100%");
});