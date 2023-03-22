import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Styles';
import _ from "lodash";
import * as SQLite from 'expo-sqlite';

const Dades = () => {
  let dadesSQL;
  db = SQLite.openDatabase("db.db");
  db.transaction(tx => {
    tx.executeSql("select * from continents", [], async (_, { rows }) => {
      dadesSQL = await rows._array;
    })
  });
  const [columns, setColumns] = useState([
    "Regió/Continent",
    "Població",
    "Percentatge de pobresa",
    "Analfabetisme",
    "Accés Electricitat",
    "PIB",
    "Expectancia Vida"
  ])

  const [direction, setDirection] = useState(null)
  const [selectedColumn, setSelectedColumn] = useState(null)

  const [continents, setContinents] = useState(dadesSQL)

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc"
    const sortedData = _.orderBy(continents, [column], [newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setContinents(sortedData)
  }
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {
        columns.map((column, index) => {
          {
            return (
              <TouchableOpacity
                key={index}
                style={styles.columnHeader}
                onPress={() => sortTable(column)}>
                <Text style={styles.columnHeaderTxt}>{column + " "}
                  {selectedColumn === column && <MaterialCommunityIcons
                    name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"}
                  />
                  }
                </Text>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={continents}
        style={{ width: "90%" }}
        keyExtractor={(item, index) => index + ""}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({ item, index }) => {
          return (
            <View style={{ ...styles.tableRow, backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white" }}>
              <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{item.continent}</Text>
              <Text style={styles.columnRowTxt}>{item.lifeExpectancy}</Text>
              <Text style={styles.columnRowTxt}>{item.percPoverty}</Text>
              <Text style={styles.columnRowTxt}>{item.literacyRate}</Text>
              <Text style={styles.columnRowTxt}>{item.acces2Electricity}</Text>
              <Text style={styles.columnRowTxt}>{item.rentaPerCapita}</Text>
            </View>
          )
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Dades;