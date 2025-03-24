import { addTwo, gameHandler, getValueHandler } from "./motor";
import { vi } from "vitest";
import * as modelo from "./modelo";

describe("GameHandler", () => {
  it("Si tiene 7.5 debé recibir el texto recibiendo la victoria", () => {
    // Arrange
    let puntuationBound = 7.5
    // Act
    const resultado = gameHandler(puntuationBound)

    // Assert
    expect(resultado).toBe("¡HAS GANADO!");
  });
});

describe("GameHandler", () => {
  it("Si tiene numero menor de 4, te dirá que has sido muy conservador", () => {
    // Arrange
    let puntuationBound = 3
    // Act
    const resultado = gameHandler(puntuationBound)

    // Assert
    expect(resultado).toBe("Has sido muy conservador");
  });
});

describe("GameHandler", () => {
  it("Si tiene el numero es de 4 a 6, te responde si te ha entrado canguelo", () => {
    // Arrange
    let puntuationBound = 5
    // Act
    const resultado = gameHandler(puntuationBound)

    // Assert
    expect(resultado).toBe("Te ha entrado el canguelo eh");
  });
});

describe("GameHandler", () => {
  it("Si tiene el numero es de 6 y 7, te responde que casi lo tenias", () => {
    // Arrange
    let puntuationBound = 7
    // Act
    const resultado = gameHandler(puntuationBound)

    // Assert
    expect(resultado).toBe("Casi casi...");
  });
});

describe("GameHandler", () => {
  it("Si superas 7.5, te dice que has perdido", () => {
    // Arrange
    let puntuationBound = 8
    // Act
    const resultado = gameHandler(puntuationBound)

    // Assert
    expect(resultado).toBe("Te has pasado...");
  });
});

describe("addTwo", () => {
  it("Si el numero aleatorio es menor de 5, no suma nada", () => {
    // Arrange
    let random = 2
    vi.spyOn(modelo, "randomNum", "get").mockReturnValue(random);
    // Act
    const resultado = addTwo(random)

    // Assert
    expect(resultado).toBe(2);
  });
});

describe("addTwo", () => {
  it("Si el numero aleatorio es mayor de 5, suma 2", () => {
    // Arrange
    let random = 10
    vi.spyOn(modelo, "randomNum", "get").mockReturnValue(random);
    // Act
    const resultado = addTwo(random)

    // Assert
    expect(resultado).toBe(12);
  });
});

describe("getValueHandler", () => {
  it("Si la carta que se recibe es mayor de 10, su valor 0.5", () => {
    // Arrange
    let random = 10
    vi.spyOn(modelo, "randomNum", "get").mockReturnValue(random);
    // Act
    const resultado = getValueHandler(random)

    // Assert
    expect(resultado).toBe(0.5);
  });
});

describe("getValueHandler", () => {
  it("Si la carta que se recibe es es menor de 10, su valor del mismo número que la carta", () => {
    // Arrange
    let random = 4
    vi.spyOn(modelo, "randomNum", "get").mockReturnValue(random);
    // Act
    const resultado = getValueHandler(random)

    // Assert
    expect(resultado).toBe(4);
  });
});