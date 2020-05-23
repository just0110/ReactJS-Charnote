const name = ["Кирилл", "Оксана", "Дмитрий", "Лена", "Кристина"];
const surname = ["Олеско", "Муженко", "Третяк", "Мишенко", "Нирня"];
const role = ["admin", "user", "viewer", "moderator", "helper"];

export const generateUnits = () => {
  let units = [];
  for (let i = 1; i <= 5; i++) {
    let random = Math.floor(Math.random() * Math.floor(5));
    units.push({
      id: i,
      firstName: name[random],
      lastName: surname[random],
      volunteer: random % 2 === 0,
      role: role[random]
    });
  }

  return units;
};

export const roles = [
  { value: 0, label: "ADMIN" },
  { value: 1, label: "USER" },
  { value: 2, label: "VIEWER" },
  { value: 3, label: "MODERATOR" },
  { value: 4, label: "HELPER" }
];
