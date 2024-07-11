const solution = (m, musicInfos) => {
  let answer = '';

  musicInfos = musicInfos.map((e) => {
    let [st, en, title, str] = e.split(',');
    let timeDiff = (new Date(`1970-01-01 ${en}:00`) - new Date(`1970-01-01 ${st}:00`)) / 60000;

    let melody = str.replace(/[A-Z]#/g, (m) => m[0].toLowerCase());
    melody = melody.repeat(Math.ceil(timeDiff / melody.length)).substr(0, timeDiff);

    return `${timeDiff},${title},${melody}`;
  });

  musicInfos.sort((a, b) => b.split(',')[0] - a.split(',')[0]);

  answer = musicInfos.filter((e) => e.split(',')[2].indexOf(m.replace(/[A-Z]#/g, (m) => m[0].toLowerCase())) != -1);

  return answer.length == 0 ? '(None)' : answer[0].split(',')[1];
};

console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
console.log(solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']));
