var lista = ["Banana", "Morango", "Maçã", "Uva", "Pêra"];

localStorage.setItem(lista, JSON.stringify(lista));

var minhaLista = JSON.parse(localStorange.getItem(lista));