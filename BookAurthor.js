import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

export default function BookAurthor({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity>
          <Text style={styles.Button}>1. William Shakespeare.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>2. William Faulkner.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>3. Henry James .</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>4. Jane Austen.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>5. Charles Dickens. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>6. Fyodor Dostoevsky .</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>7. Ernest Hemingway.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>8. Franz Kafka. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>9. Dr. A. P. J. Abdul Kalam.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>10. Gandhi.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>11. Ken Follett. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>12. Astrid Lindgren.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>13. Debbie Macomber.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>14. Naoki Urasawa.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>15. EL James.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>16. Tite Kubo. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>17. Eiji Yoshikawa. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>18. Catherine Cookson.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>19. Stephenie Meyer.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>20. Norman Bridwell. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>21. David Baldacci.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>22. Nicholas Sparks.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>23. Hirohiko Araki.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>24. Evan Hunter. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>25. Andrew Neiderman.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>26. Roger Hargreaves	.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>27. Robin Cook.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>28. Wilbur Smith.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>29. Erskine Caldwell.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>30. Judith Krantz.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>31. Eleanor Hibbert.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>32. Lewis Carroll. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>33. Denise Robins.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>34. Cao Xueqin.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>35. Ian Fleming.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>36. Hermann Hesse.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>37. Rex Stout. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>38. Anne Golon.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>39. Frank G. Slaughter. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>40. Edgar Rice Burroughs. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>41. Harold Robbins.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>42. Georges Simenon. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>43. Enid Blyton. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>44. Sidney Sheldon.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>45. Eiichiro Oda.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>46. William Shakespeare.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>47. Louis L'Amour.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>48. Stephen King.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>49. Dean Koontz. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>50. Nora Roberts.</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009999',
  },
  Button:{
    width: "100%",
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#ccffff",
  }
});