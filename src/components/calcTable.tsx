"use client";
import style from "@/styles/page.module.sass";
import styles from "@/styles/calcTable.module.sass";
import { useState } from "react";

export default function CalcTable() {
  const [insertDisplay, setInsertDisplay] = useState(""); // Display como string para concatenar números

  // Função para inserir números no display
  const insert = (num: string) => {
    setInsertDisplay((prev) => prev + num); // Concatenando os números
  };

  // Função para somar (ou você pode implementar outros cálculos)
  const calculate = () => {
    try {
      // Usando eval para calcular a expressão (pode ser perigoso, cuidado)
      setInsertDisplay(eval(insertDisplay)); // Transformar string em cálculo
    } catch (error) {
      setInsertDisplay("Erro"); // Caso ocorra um erro
    }
  };

  const clearDisplay = () => {
    setInsertDisplay(""); // Limpar o display
  };

  const back = () => {
    setInsertDisplay((prev) => prev.slice(0, -1));
  }

  return (
    <>
      <div className={style.calcDisplay}>
        <input
          className={style.display}
          type="text"
          value={insertDisplay}
          readOnly
        />
      </div>

      <div className={styles.calcButtons}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <td className={styles.td} colSpan={2}>
                <button className={styles.button} onClick={clearDisplay}>
                  C
                </button>
              </td>

              <td className={styles.td} colSpan={2}>
                <button className={styles.button} onClick={back}>
                  ←
                </button>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("7")}>
                  7
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("8")}>
                  8
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("9")}>
                  9
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("/")}>
                  /
                </button>
              </td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("4")}>
                  4
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("5")}>
                  5
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("6")}>
                  6
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("*")}>
                  *
                </button>
              </td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("1")}>
                  1
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("2")}>
                  2
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("3")}>
                  3
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("-")}>
                  -
                </button>
              </td>
            </tr>

            <tr className={styles.tr}>
              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("0")}>
                  0
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert(".")}>
                  .
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={calculate}>
                  =
                </button>
              </td>

              <td className={styles.td}>
                <button className={styles.button} onClick={() => insert("+")}>
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
