import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';

export default function BookList({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity>
          <Text style={styles.Button}>1. Don Quixote. By Miguel de Cervantes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>2. Lord of the Rings. By J.R.R. Tolkien.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>3. Harry Potter and the Sorcerer's Stone. By J.K. Rowling.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>4. And Then There Were None. By Agatha Christie.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>5. Alice's Adventures in Wonderland. By Lewis Carroll. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>6. The Lion, the Witch, and the Wardrobe.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>7. Pinocchio.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>8. Catcher in the Rye. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>9. Anna Karenina. Greta Garbo in Anna Karenina.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>10. To Kill a Mockingbird. To Kill a Mockingbird.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>11. The Great Gatsby. F. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>12. One Hundred Years of Solitude.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>13. A Passage to India.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>14. Invisible Man.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>15. Don Quixote.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>16. Beloved. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>17. Best Baby Names 2022. By Siobhan Thomas. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>18. 100,000+ Baby Names. By Bruce Lansky.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>19. The Complete Book of Baby Names. By: Lesley Bolton.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>20. The Baby Name Wizard (4th edition) </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>21. Inspired Baby Names From Around The World.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>22. Baby Names 2021.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>23. The Penguin Book of Baby Names.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>24. Ada. Book: Charles Frazier's Cold Mountain. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>25. Allie. Book: Nicholas Sparks's The Notebook.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>26. Anne. Book: Lucy Maud's Anne of Green Gables.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>27. Annika. Book: Astrid Lindgren's Pippi Longstocking.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>28. Arrietty.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>29. Beatrice.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>30. Invisible Man.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>31. Bella.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>32. Brett. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>33. CREATION AND COMPLETION: ESSENTIAL POINTS OF TANTRIC MEDITATION.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>34. WHAT THE BUDDHA TAUGHT.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>35. Mahayana Additions (Holy Books of Buddhism).</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>36. Tibetan Book of the Dead (Holy Books of Buddhism).</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>37. BUDDHISM FOR BEGINNERS. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>38. Zen Buddhism (Holy Books of Buddhism).</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>39. Master of the Game. by Sidney Sheldon. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>40. Sidney Sheldon's Mistress of the... by Sidney Sheldon. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>41. The Other Side of Midnight. by Sidney Sheldon.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>42. If Tomorrow Comes. by Sidney Sheldon. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>43. Tell Me Your Dreams. by Sidney Sheldon. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>44. Bloodline. by Sidney Sheldon.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>45. Windmills of the Gods.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>46. Sidney Sheldon's Chasing Tomorrow.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>47. Five on a Treasure Island. by Enid Blyton.</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>48. The Enchanted Wood. by Enid Blyton.  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>49. The Magic Faraway Tree. by Enid Blyton. </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Button}>50. The Faraway Tree Stories. by Enid Blyton.</Text>
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