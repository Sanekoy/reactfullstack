class Department {
  constructor(Salary, Name, Size) {
    this.Salary = Salary; //размер зарплаты каждого сотрудника в у.е.
    this.Name = Name; //название отдела
    this.Size = Size; //кол-во сотрудников
  }

  GetSalaryIndex(index) {
    return this.Salary[index];
  }

  GetSalary(){
    return this.Salary;
  }

  GetName() {
    return this.Name;
  }

  GetSize() {
    return this.Size;
  }

  AverageSalary() { //функциональный метод
    let sum=0;
    for (let i = 0; i < this.Size; i++) {
      sum += this.Salary[i];
    }
    return sum/this.Size;
  }
}

let Array = [
  new Department([110, 160, 350], 'Department1', 3),
  new Department([400, 350, 720], 'Department2', 3),
  new Department([220, 900, 480], 'Department3', 3),
  new Department([220, 900, 480], 'Department4', 3)
];

console.log("Вывод полной информации обо всех обьектах массива:");
Array.forEach(obj => {
  console.log("Name:", obj.GetName());
  console.log("Salary:", obj.GetSalary());
  console.log("Size:", obj.GetSize());
  console.log("~~~");
});

let ArraySameResult = [];
for (let i = 0; i < Array.length; i++) {
  for (let j = i + 1; j < Array.length; j++) {
    if (Array[i].AverageSalary() === Array[j].AverageSalary()) {
      ArraySameResult.push(Array[i]);
      ArraySameResult.push(Array[j]);
    }
  }
}

console.log("Вывод информации об обьектах из массива с одинаковыми результатоми:");
ArraySameResult.forEach(obj => {
  console.log("Name:", obj.GetName());
  console.log();
});
