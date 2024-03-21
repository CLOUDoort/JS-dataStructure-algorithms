function solution(record) {
  const msg = [];
  const userInfo = {};
  const cmd = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach((r) => {
    const [command, id, name] = r.split(' ');
    if (command !== 'Change') msg.push([id, command]);

    if (name) userInfo[id] = name;
  });

  return msg.map(([id, command]) => {
    return `${userInfo[id]}${cmd[command]}`;
  });
}

const solution2 = (record) => {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(' ');
    if (state !== 'Change') action.push([state, id]);
    if (nick) userInfo[id] = nick;
  });

  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}}`;
  });
};
