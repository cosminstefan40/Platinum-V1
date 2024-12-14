const { smd } = require("../lib");

// Expanded Array of Questions
const questions = [
    "1. Which phone are u using?",
    "2. Do you have a crush?",
    "3. Do u like sex chatting?",
    "4. How did u feel about me?",
    "5. We are left in a room and I'm horny, I asked you to help me out. What would you do?",
    "6. Do you go for night parties?",
    "7. Have you ever smoked before?",
    "8. How many girls/guys have u dated?",
    "9. Do u masturbate?",
    "10. Tell me a story?",
    "11. What are u wearing now?",
    "12. Ever had a near death experience?",
    "13. If you had a chance would u date me?",
    "14. Big or small ass?",
    "15. What did u hate about me?",
    "16. What name would you give your pussy/Dick?",
    "17. Will u be mine if u given opportunity?",
    "18. What do you look out in your partner before dating him/her?",
    "19. Do u watch porn?",
    "20. If you had 3 wishes, what would they be?",
    "21. Best thing that ever happen to u?",
    "22. Light skinned or dark?",
    "23. Did u wear tight?",
    "24. Last time you had sex?",
    "25. Have you ever been touched by your fellow girl/guy?",
    "26. Do you enjoy porn?",
    "27. Do you like dirty talks?",
    "28. Something you would change about yourself?",
    "29. Any scars?",
    "30. Worst mistake?",
    "31. Can you stay in a room where two people are having sex?",
    "32. Someone u would die for?",
    "33. Watch the movie or read the book?",
    "34. Did u wear waist beads?",
    "35. Best body part?",
    "36. Worst thing that ever happen to u?",
    "37. Tell me everything you are wearing now?",
    "38. Something u are proud of?",
    "39. What's ur dream?",
    "40. Ever been abused?",
    "41. Can we fuck?",
    "42. Use my pic as ur dp for one week",
    "43. Will you let me fuck you?",
    "44. What lead to ur breakup in ur last relationship?",
    "45. When last did u feel like having sex?",
    "46. Are u single or taken?",
    "47. What type and colour of pant/boxer are you wearing now?",
    "48. Ever slept out?",
    "49. Can u marry someone that behaves like u?",
    "50. Ever snap nude pic?",
    "51. Last kiss?",
    "52. Girlfriend/Boyfriend name?",
    "53. What's the color of ur pantie & bra are u wearing now?",
    "54. How many are u in ur family?",
    "55. Ever cheated on ur bae/boo b4?",
    "56. Weight?",
    "57. First kiss?",
    "58. Player or loyal?",
    "59. What did u wish to do if I there?",
    "60. Who do you hate?",
    "61. Longest relationship?",
    "62. What will u do if I offend u?",
    "63. What do you love in me?",
    "64. Mention three sex positions u know?",
    "65. What's your fear in life?",
    "66. Favorite cloth?",
    "67. Did u wear bra now?",
    "68. What get u wet?",
    "69. Ever had sex?",
    "70. Girl/Boy Best friend?",
    "71. Are you naughty?",
    "72. Do u love fingering or sucking?",
    "73. Favorite body part of your opposite gender?",
    "74. Big pussy/dick or normal?",
    "75. What can I do to make u feel horny?",
    "76. Take a pic now and send to me?",
    "77. Which part of ur body did u play with whenever u are feeling bored?",
    "78. Send me your two sexiest pics.",
    "79. Which area did u live?",
    "80. Let me see your panties and bra/boxer while ur putting dem on.",
    "81. Your class or level?",
    "82. Age?",
    "83. What will be ur reaction if u see me?",
    "84. Last time u cried and what caused it?",
    "85. Your kind of man/woman?",
    "86. What's your mood right now?",
    "87. Tell me things u want us to do together.",
    "88. Best hobby?",
    "89. Can u let me finger/suck u?",
    "90. What turns you on before sex?",
    "91. Can u cook?",
    "92. If u see me naked, what will u do?",
    "93. Any tattoos?",
    "94. Hairy/shaved pussy/dick?",
    "95. What do you want from me?",
    "96. Best food?",
    "97. How much do u enjoy sex?",
    "98. Big breast or normal?",
    "99. Did u wish u could start over?",
    "100. Ever exchange nudes?",
    "101. What's ur talent?",
    "102. What will u do if I mistakenly touch ur breast?",
    "103. Worst mistake?",
    "104. Condom or raw?",
    "105. Full name?",
    "106. Has someone ever seen ur boobs?",
    "107. What's ur pant/boxer size?",
    "108. Will you let me kiss you?",
    "109. Will you let me touch you?",
    "110. Give me a sweet name.",
    "111. What will u do if I mistakenly kiss u?",
    "112. How long can u last on bed with ur partner?",
    "113. Can u cook?",
    "114. How do u feel when u watch porn?",
    "115. Something u can't do without?",
    "116. Can u dance?",
    "117. Ever kissed a friend?",
    "118. In what way have you cheated on your boo?",
    "119. Who's ur crush?",
    "120. Bra size?",
    "121. Best color?",
    "122. Can we be friends with benefits?",
    "123. Ever tasted sperm?",
    "124. Can u do a lap dance?",
    "125. Someone you can tell anything to?",
    "126. If you had 3 wishes, what would they be?",
    "127. Who can you die for?",
    "128. Ever smoked?",
    "129. Ever fingered urself?",
    "130. What's the naughtiest thing you've ever done?",
    "131. Ever slept naked?",
    "132. What will u do if I mistakenly kiss u?",
    "133. Can u twerk?",
    "134. Ever kissed someone of the same sex?",
    "135. Does naughty talk get u aroused?",
    "136. How long do u want sex to be?",
    "137. One of ur deepest secrets?",
    "138. Name of ur boo/bae?",
    "139. What's ur best subject?",
    "140. Describe me in one word?",
    "141. Which would u give me: a kiss, a lap dance, or sex?",
    "142. Favorite sex position?",
    "143. Who made u smile today?",
    "144. When last did u read ur Bible or Islamic book?",
    "145. Best part u love in a girl's body?",
    "146. Best part u love in a guy's body?",
    "147. Ever had the urge to have sex with me?",
    "148. When last did u pray?",
    "149. Do u have a serious lover or relationship?",
    "150. Do u love me?",
    "151. Send nudes.",
    "152. Can u send me a card?",
    "153. If you got pregnant or got someone pregnant, are you keeping the baby?",
    "154. What's your wildest fantasy?",
    "155. If you could have dinner with anyone, who would it be and why?",
    "156. What's the most daring thing you've ever done?",
    "157. If we were on a deserted island, what would you do to survive?",
    "158. What's the weirdest thing you've ever done in public?",
    "159. What's one secret you've never told anyone?",
    "160. If you could go back in time, what would you change about your love life?",
    "161. What's the most romantic thing you've ever done for someone?",
    "162. What's the most awkward date you've been on?",
    "163. Describe your ideal romantic evening.",
    "164. Have you ever sent a risky text to the wrong person?",
    "165. What's the best pickup line you've ever heard or used?",
    "166. What would you do if someone you liked kissed you out of the blue?",
    "167. What's the most unexpected place you've had a romantic moment?",
    "168. Have you ever fallen for someone you couldn't have?",
    "169. What's the most attractive quality in a person for you?",
    "170. If you could be invisible for a day, what would you do?",
    "171. Have you ever had a crush on a friend's partner?",
    "172. If I dared you to kiss me, would you?",
    "173. What's the longest you've gone without showering?",
    "174. What's the strangest thing you've found attractive in someone?",
    "175. Have you ever had a crush on a teacher?",
    "176. What's the craziest thing you'd do for love?",
    "177. What's the most embarrassing thing that's happened to you during a romantic moment?",
    "178. If you could describe your love life in a song, what song would it be?",
    "179. What's the best compliment you've ever received?",
    "180. What's your biggest turn-off?",
    "181. Would you ever go skinny dipping?",
    "182. What's the most you've ever lied to get someone's attention?",
    "183. What's your guilty pleasure TV show or movie?",
    "184. Have you ever been caught doing something you shouldn't have?",
    "185. What's the strangest thing you've googled late at night?",
    "186. If you could only keep one memory from your life, what would it be?",
    "187. Have you ever accidentally sent a text to the wrong person? What was it?",
    "188. If you had to eat only one food for the rest of your life, what would it be?",
    "189. What's the most awkward thing you've done on a first date?",
    "190. Have you ever pretended to like something just to impress someone?",
    "191. What's the worst advice you've ever received?",
    "192. If you could relive any moment in your life, which one would it be?",
    "193. What's the funniest thing you've ever done while drunk?",
    "194. Have you ever had a crush on someone you shouldn't have?",
    "195. What's the craziest thing you've ever done to impress someone?",
    "196. If you could be famous for one thing, what would it be?",
    "197. Have you ever had a dream about someone in this group? What was it?",
    "198. What's the most embarrassing thing you've posted on social media?",
    "199. If you could switch lives with someone for a day, who would it be and why?",
    "200. What's the most daring thing you've ever done in your life?",
    "201. If you had to get a tattoo right now, what would it be?",
    "202. Have you ever had a wardrobe malfunction in public?",
    "203. What's the weirdest compliment you've ever received?",
    "204. If you could travel anywhere in the world, where would you go?",
    "205. What's your biggest irrational fear?",
    "206. If you had to sing karaoke, what song would you choose?",
    "207. What's the most embarrassing thing you've ever done in front of your crush?",
    "208. If you could have any superpower, what would it be?",
    "209. Have you ever had a crush on a fictional character?",
    "210. What's the weirdest dream you've ever had?",
    "211. What's the most awkward text you've ever sent?",
    "212. If you could live in any time period, what would it be?",
    "213. What's the craziest thing you've done for a dare?",
    "214. Have you ever cried during a movie? Which one?",
    "215. If you could master any skill instantly, what would it be?",
    "216. What's the most ridiculous rumor you've heard about yourself?",
    "217. Have you ever had a paranormal experience?",
    "218. What's the most spontaneous thing you've ever done?",
    "219. If you were stranded on a deserted island, what three things would you bring?",
    "220. What's the funniest thing that's happened to you in school?",
    "221. If you had to delete all but three apps on your phone, which ones would you keep?",
    "222. What's the weirdest thing you've ever eaten?",
    "223. If you could spend a day with a celebrity, who would it be?",
    "224. What's the most unusual talent you have?",
    "225. If you could change one thing about your past, what would it be?",
    "226. What's the most embarrassing song on your playlist?",
    "227. Have you ever laughed at the wrong moment?",
    "228. If you had to live in one movie universe, which one would it be?",
    "229. What's the strangest thing you've ever done out of boredom?",
    "230. If you could swap lives with someone for a week, who would it be?",
    "231. Have you ever been caught talking to yourself?",
    "232. What's the most useless fact you know?",
    "233. If you could be an animal for a day, which one would it be?",
    "234. What's the weirdest thing you've ever bought?",
    "235. If you could instantly learn any language, which one would it be?",
    "236. What's the most embarrassing nickname you've ever had?",
    "237. Have you ever accidentally walked into the wrong room or building?",
    "238. If you could time travel, would you go to the past or the future?",
    "239. What's the most awkward thing you've done during a presentation?",
    "240. If you could erase one memory, what would it be?",
    "241. What's the weirdest thing you've ever overheard?",
    "242. If you could be famous for a day, what would you do?",
    "243. What's the silliest reason you've ever cried?",
    "244. If you had to live without one of your senses, which one would it be?",
    "245. What's the most cringe-worthy thing you've done on a date?",
    "246. If you could trade lives with a character from a TV show, who would it be?",
    "247. What's the most awkward thing you've said to someone you like?",
    "248. If you could make one wish right now, what would it be?",
    "249. What's the funniest prank you've ever pulled?",
    "250. If you could live anywhere in the world, where would it be?",
    "251. What's the weirdest thing you've done in front of a mirror?",
    "252. If someone gave you $10,000 to embarrass yourself in public, what would you do?",
    "253. Have you ever been caught doing something you shouldn't have been doing?",
    "254. If you could erase one awkward moment from your life, what would it be?",
    "255. What's the most inappropriate thing you've laughed at?",
    "256. If you could know one secret about someone here, what would you want to know?",
    "257. What's the most bizarre lie you've ever told to get out of trouble?",
    "258. If you could read someone’s mind, whose would it be and why?",
    "259. Have you ever done something so embarrassing that you pretended it never happened?",
    "260. What's the weirdest dream you've had about someone you know?",
    "261. Have you ever walked in on someone at the worst possible time?",
    "262. What's the strangest thing you've Googled out of curiosity?",
    "263. If you had to wear one outfit for the rest of your life, what would it be?",
    "264. Have you ever sent a text and instantly regretted it?",
    "265. If you could swap lives with anyone in this group, who would it be and why?",
    "266. What's the most awkward situation you've been in with a stranger?",
    "267. If you could have dinner with one fictional villain, who would it be?",
    "268. Have you ever had a crush on a teacher or authority figure?",
    "269. What's the most mischievous thing you've ever done as a kid?",
    "270. If you could relive one embarrassing moment, what would it be?",
    "271. Have you ever been caught dancing or singing when you thought you were alone?",
    "272. If you were dared to prank call someone right now, who would it be?",
    "273. What's the strangest thing you've ever done in your sleep?",
    "274. Have you ever walked out of a movie because it was too awkward or bad?",
    "275. If you had to confess one deep, dark secret, what would it be?",
    "276. What's the craziest thing you'd do for a million dollars?",
    "277. If you could sneak into someone's house for a day, whose house would it be?",
    "278. What's the most embarrassing thing you've said to impress someone?",
    "279. Have you ever been caught in a lie you couldn't explain?",
    "280. If you could delete one thing you've ever said, what would it be?",
    "281. Have you ever been caught talking about someone behind their back?",
    "282. What's the most daring dare you've ever accepted?",
    "283. If you could switch your personality with someone for a day, who would it be?",
    "284. Have you ever given someone terrible advice on purpose?",
    "285. What's the weirdest food combination you've ever tried?",
    "286. If you could watch one embarrassing moment from someone else's life, what would it be?",
    "287. Have you ever done something naughty and gotten away with it?",
    "288. If you could get away with any crime, what would you do?",
    "289. What's the most scandalous secret someone has shared with you?",
    "290. Have you ever accidentally sent a screenshot to the person you were talking about?",
    "291. What's the most ridiculous thing you've done for love or a crush?",
    "292. If you had to live one day as the opposite sex, what would you do?",
    "293. Have you ever been caught in a super awkward situation with a family member?",
    "294. If you could eavesdrop on one conversation, whose would it be?",
    "295. What's the most embarrassing outfit you've ever worn in public?",
    "296. If you could switch lives with a celebrity for a week, who would it be?",
    "297. What's the most awkward text you've received from the wrong person?",
    "298. If you could get away with one outrageous act, what would you do?",
    "299. What's the most awkward compliment you've ever given or received?",
    "300. If you could ask your crush one thing without them knowing it was you, what would it be?",
    "301. Have you ever kissed someone of the same sex?",
    "302. What's the naughtiest thing you've ever done at a party?",
    "303. Do you like being spanked or spanking someone?",
    "304. What's your favorite type of foreplay?",
    "305. Have you ever had a secret fling?",
    "306. Would you ever have a one-night stand?",
    "307. What's the kinkiest thing you've ever done in bed?",
    "308. What would you do if your partner asked for a threesome?",
    "309. What's the most adventurous place you've had sex?",
    "310. Would you ever send nude pictures to someone you're attracted to?",
    "311. What's your biggest sexual fantasy?",
    "312. Do you like dirty talk during sex?",
    "313. Have you ever used sex toys?",
    "314. Have you ever had a sexual encounter in public?",
    "315. What's your favorite position during sex?",
    "316. What's the longest time you've gone without having sex?",
    "317. Have you ever sexted someone you were attracted to?",
    "318. Have you ever fantasized about someone else while being intimate with a partner?",
    "319. What's the dirtiest text you've ever sent?",
    "320. Have you ever had sex in a place you shouldn't have?",
    "321. Would you let someone watch you have sex?",
    "322. What's your opinion on one-night stands?",
    "323. Do you like watching porn? If so, what type?",
    "324. Have you ever tried roleplay in the bedroom?",
    "325. Have you ever been caught having sex?",
    "326. What's your favorite body part on a partner?",
    "327. What do you find most attractive in someone?",
    "328. Would you ever get involved in a friends-with-benefits relationship?",
    "329. Have you ever been to a strip club?",
    "330. Have you ever shared your intimate fantasies with a partner?",
    "331. Do you like being tied up during sex?",
    "332. Have you ever kissed someone in public in a very passionate way?",
    "333. Have you ever done something sexual while at work or school?",
    "334. What's the most intimate thing you've done with a partner?",
    "335. Do you believe in love at first sight or lust at first sight?",
    "336. Have you ever fantasized about a teacher or mentor?",
    "337. Would you try having sex on a rooftop or balcony?",
    "338. Would you be into an open relationship?",
    "339. Have you ever had a crush on a friend's partner?",
    "340. Have you ever gotten turned on while talking to someone online?",
    "341. Do you enjoy giving or receiving oral sex more?",
    "342. Have you ever kissed someone just to see what it felt like?",
    "343. What is the most intimate thing someone has done for you?",
    "344. Do you like when your partner takes control in the bedroom?",
    "345. What's the most exciting date idea you can think of?",
    "346. Would you ever consider having a relationship with someone much older or younger than you?",
    "347. What do you think about the idea of sexting?",
    "348. What's the most romantic gesture you've ever received?",
    "349. If I kissed you right now, what would you do?",
    "350. What’s the craziest fantasy you’d like to try with a partner?",
    "351. What would you do if your partner asked for something unexpected in the bedroom?",
    "352. Have you ever had an accidental orgasm?",
    "353. What’s the best compliment you’ve ever received about your body?",
    "354. Have you ever had a romantic encounter that turned into a total disaster?",
    "355. What’s your opinion on casual hookups?",
    "356. Would you ever try BDSM?",
    "357. What’s the most shocking thing you’ve done in the name of love?",
    "358. What would you do if you were caught in bed with someone you weren’t supposed to be with?",
    "359. Have you ever had a crush on someone in authority?",
    "360. Would you ever sleep with someone just because they're attractive?",
    "361. Have you ever been to a sex party or event?",
    "362. Would you ever do something naughty for a dare?",
    "363. Have you ever gotten caught staring at someone's body?",
    "364. What’s the most erotic thing you’ve seen or experienced?",
    "365. Would you consider being in an open or polyamorous relationship?",
    "366. Have you ever taken part in a dare that went too far?",
    "367. What’s the best thing someone could do to turn you on?",
    "368. If we were alone in a room, what would you want to do?",
    "369. Do you like flirting with someone even if you know you’re not going to sleep with them?",
    "370. Have you ever done something freaky on a dare?",
    "371. If you were dared to wear something sexy for a day, what would you wear?",
    "372. What's the most flirtatious thing you've done in public?",
    "373. What's your idea of the perfect romantic getaway?",
    "374. Would you ever let someone take control during sex?",
    "375. Do you like it when a partner plays with your hair during sex?",
    "376. If you could only sleep with one person for the rest of your life, who would it be?",
    "377. Have you ever been seduced by someone unexpectedly?",
    "378. Would you ever go skinny dipping with a group of friends?",
    "379. Have you ever tried dirty dancing?",
    "380. If you were to spend a night with me, what would you want to do?",
    "381. What would you say if I kissed you right now?",
    "382. What's your favorite body part to touch during intimacy?",
    "383. Have you ever fantasized about someone you shouldn't have?",
    "384. What’s your ideal intimate evening with a partner?",
    "385. Have you ever sent someone a sext without them asking?",
    "386. What's your opinion on nude beaches?",
    "387. What would you do if I told you I wanted to kiss you?",
    "388. Do you enjoy giving compliments about someone's body?",
    "389. Would you ever tell a partner about your fantasies?",
    "390. What's the naughtiest thing you've done in public?",
    "391. If you were dared to kiss someone here, would you do it?",
    "392. Would you ever try having sex in a place that’s risky?",
    "393. What's the most spontaneous thing you've ever done for love?",
    "394. Do you enjoy being the dominant or submissive one in the bedroom?",
    "395. What's the most exciting thing you've done for your partner?",
    "396. Would you ever try a roleplay scenario during sex?",
    "397. What’s your opinion on having a sexual relationship with someone much older or younger than you?",
    "398. What's the most adventurous thing you've done for love?",
    "399. Would you ever go to a strip club with a partner?",
    "400. If you could get away with one naughty thing, what would you do?"
];

// Game state
this.game = this.game ? this.game : {};

// Command to start or join a game
smd(
  {
    cmdname: "qgame",
    desc: "Start or join a question game.",
    react: "🔥",
    type: "game",
    filename: __filename,
  },
  async (context, text) => {
    try {
      if (Object.values(this.game).find(game => game.id.startsWith("questiongame") && [game.player1, game.player2].includes(context.sender))) {
        return context.reply("_A game is already going on_");
      }

      let existingGame = Object.values(this.game).find(game => game.state === "WAITING");

      if (existingGame) {
        existingGame.player2 = context.sender;
        existingGame.state = "PLAYING";
        existingGame.currentTurn = existingGame.player1;

        context.reply("_Game started!_");

        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        existingGame.lastQuestion = randomQuestion;

        await context.reply(`@${existingGame.currentTurn.split('@')[0]}, ${randomQuestion}`, { mentions: [existingGame.currentTurn] });

        // Set global timer (7 minutes)
        existingGame.globalTimer = setTimeout(async () => {
          // If no activity within 7 minutes, end the game
          existingGame.state = "ENDED";
          await context.reply("_Game ended due to inactivity. No moves made within 7 minutes._");
        }, 420000); // 7 minutes = 420,000 ms
      } else {
        const newGame = {
          id: "questiongame-" + +new Date(),
          player1: context.sender,
          player2: "",
          state: "WAITING",
          currentTurn: "",
          lastQuestion: "",
          globalTimer: null
        };
        this.game[newGame.id] = newGame;
        context.reply("_Waiting for another player to join. Use the command again to join._");
      }
    } catch (e) {
      context.error(`${e}\n\nCommand: questiongame`, e, false);
    }
  }
);

// Command to handle answers by number
smd(
  {
    cmdname: "ans",
    desc: "Answer the current question in the question game.",
    type: "game",
    filename: __filename,
  },
  async (context, text) => {
    try {
      let runningGame = Object.values(this.game).find(game => game.id.startsWith("questiongame") && game.state === "PLAYING");

      if (!runningGame) return context.reply("_No question game is running._");

      if (context.sender !== runningGame.currentTurn) {
        return context.reply("_It's not your turn to answer._");
      }

      if (text.trim().length === 0) {
        return context.reply("_Please provide an answer to the question._");
      }

      // Proceed to the next player's turn
      runningGame.currentTurn = runningGame.currentTurn === runningGame.player1 ? runningGame.player2 : runningGame.player1;

      // Send the next question
      const nextQuestion = questions[Math.floor(Math.random() * questions.length)];
      runningGame.lastQuestion = nextQuestion;

      await context.reply(`@${runningGame.currentTurn.split('@')[0]}, ${nextQuestion}`, { mentions: [runningGame.currentTurn] });

      // Reset global timer
      clearTimeout(runningGame.globalTimer);
      runningGame.globalTimer = setTimeout(async () => {
        runningGame.state = "ENDED";
        await context.reply("_Game ended due to inactivity. No moves made within 7 minutes._");
      }, 420000); // 7 minutes = 420,000 ms

    } catch (e) {
      context.error(`${e}\n\nMessage Handling Error`, e, false);
    }
  }
);

// Command to delete a running game
smd(
  {
    cmdname: "delqgame",
    desc: "Deletes a running question game.",
    type: "game",
    filename: __filename,
  },
  async (context) => {
    try {
      let runningGame = Object.values(this.game).find(game => game.id.startsWith("questiongame"));
      let isAdminOrPlayer = context.isGroup && context.isAdmin || context.isCreator || [runningGame.player1, runningGame.player2].includes(context.sender);

      if (runningGame) {
        if (isAdminOrPlayer) {
          delete this.game[runningGame.id];
          return context.reply("_Successfully deleted the running question game._");
        } else {
          return context.reply("_You are not a player of the running game!_");
        }
      } else {
        return context.reply("_No question game is running._");
      }
    } catch (e) {
      context.error(`${e}\n\nCommand: delquestiongame`, e, false);
    }
  }
);
