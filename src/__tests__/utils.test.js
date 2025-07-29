// src/__tests__/utils.test.js

import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();
    const expected = currentYear - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expected);
  });

  it("returns 0 for someone born this year", () => {
    // Arrange
    const birthYear = new Date().getFullYear();

    // Act
    const age = currentAgeForBirthYear(birthYear);

    // Assert
    expect(age).toBe(0);
  });

  it("returns the correct age for a person born in year 0", () => {
    // Arrange
    const birthYear = 0;
    const currentYear = new Date().getFullYear();
    const expected = currentYear - 0;

    // Act
    const age = currentAgeForBirthYear(birthYear);

    // Assert
    expect(age).toBe(expected);
  });
});
