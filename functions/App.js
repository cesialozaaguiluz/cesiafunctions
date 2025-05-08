import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Button, ScrollView, Image } from 'react-native';

const App = () => {

  const [number, setNumber] = useState(1);

  const changenumber = () => {
    if (number < 5) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };

  return (
//
    <View>
 
  <Pressable onPress={() => changenumber()}>
       
        <Text
     
          style={
              // Argument -- Inside of a Style Tag
            number === 1
              ? styles.paragraphgreen
              : number === 2
              ? styles.paragraphblue
              : number === 3
              ? styles.paragraphred
              : number === 4
              ? styles.paragraphteal
              : styles.paragraphpurple
          }>
        This is my interest number {number}.
        </Text>
      </Pressable>

 <ScrollView>
 {number === 1?<View style={styles.container2}>
      <Text style={styles.paragraphgreen}>
        Tennis
      </Text>
    </View> :null}
    {number === 1?<View style={styles.container2}>
      <Image
          source={{ uri: 'https://i.imgur.com/3EyZ3cOg.jpg' }}
          style={{ width: 300, height: 300 }}
        />
    </View> :null}
    {number === 1? <View style={styles.container2}>
      <Text style={styles.paragraphgreen}>
        I'm interested in tennis because I really enjoy the sport. I started to play it in my sophomore year of high school for the school's girls tennis team and I liked it a lot. Whenever I have time, I like to watch some matches as well.
      </Text>
    </View> :null}
    {number === 2?<View style={styles.container}>
      <Text style={styles.paragraphblue}>
        writing
      </Text>
    </View> :null}
    {number === 2?<View style={styles.container}>
    <Image
          source={{ uri: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_teaser_image/2021-07/handwriting_literacy_learning.png.jpg?itok=9bQbYvvY' }}
          style={{ width: 300, height: 300 }}
        />
    </View> :null}
    {number === 2? <View style={styles.container}>
      <Text style={styles.paragraphblue}>
        I am interested in writing because I enjoy creating stories and creating characters. I like to do this as a hobby.
      </Text>
    </View> :null}
    {number === 3?<View style={styles.container3}>
      <Text style={styles.paragraphred}>
        reading
      </Text>
    </View> :null}
    {number === 3?<View style={styles.container3}>
    <Image
          source={{ uri: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/shelves-of-old-books-in-library-dougal-waters.jpg' }}
          style={{ width: 300, height: 300 }}
        />
    </View> :null}
    {number === 3? <View style={styles.container3}>
      <Text style={styles.paragraphred}>
        I like reading a lot. I am interested in it because I get to read different stories, and sometimes similar stories with different point of views. I like reading because I also get to understand how others feel.
      </Text>
    </View> :null}
    {number === 4?<View style={styles.container4}>
      <Text style={styles.paragraphteal}>
        Music
      </Text>
    </View> :null}
    {number === 4?<View style={styles.container4}>
    <Image
          source={{ uri: 'https://images.squarespace-cdn.com/content/v1/530554f0e4b0658094bf0c36/1499308435557-KKUGGFO1GFFVRV49SN43/image-asset.png' }}
          style={{ width: 300, height: 300 }}
        />
    </View> :null}
    {number === 4? <View style={styles.container4}>
      <Text style={styles.paragraphteal}>
        I like listening to music because it can help me concentrate or relax. Playing upbeat music is my favorite when I have to get something done quickly.
      </Text>
    </View> :null}
    {number === 5?<View style={styles.container5}>
      <Text style={styles.paragraphpurple}>
        Business
      </Text>
    </View> :null}
    {number === 5?<View style={styles.container5}>
    <Image
          source={{ uri: 'https://imageio.forbes.com/specials-images/imageserve/5fca87f3ce4ca55e8985a10a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds' }}
          style={{ width: 300, height: 300 }}
        />
    </View> :null}
    {number === 5? <View style={styles.container5}>
      <Text style={styles.paragraphpurple}>
        I'm interested in Business because of the variety of things I can do. I'm going to major in Business Analytics & Information Systems and I'm aiming to get a nice business corporate job at the end.
      </Text>
    </View> :null}
    </ScrollView>
    </View>
  );
};

// Output (like HTML) ends here

//need to export the Component.
export default App;

//Styling -- Like CSS starts here.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#cdb4db',
    padding: 8,
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffc8dd',
    padding: 8,
    alignItems: 'center'
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#bde0fe',
    padding: 8,
    alignItems: 'center'
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#495057',
    padding: 8,
    alignItems: 'center'
  },
  container5: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#b9fbc0',
    padding: 8,
    alignItems: 'center'
  },

  paragraphblue: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1d3557',
  },
  paragraphred: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ad2831',
  },
  paragraphgreen: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
  paragraphteal: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00afb9',
  },
  paragraphpurple: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8338ec',
  },

  paragraph2: {
    margin: 14,
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
});
