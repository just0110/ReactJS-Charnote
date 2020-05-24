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
  { value: "admin", label: "ADMIN" },
  { value: "user", label: "USER" },
  { value: "viewer", label: "VIEWER" },
  { value: "moderator", label: "MODERATOR" },
  { value: "helper", label: "HELPER" }
];
