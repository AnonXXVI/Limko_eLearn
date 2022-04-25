import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
   <ScrollView>
    <View style={styles.main}>
     <View style={styles.header}>
      <View style={styles.top}> 
       <TouchableOpacity><Image style={styles.options} source={require('./assets/options.png')}>
        </Image>
         </TouchableOpacity>
          <View >
           <Image style={styles.logo} source={require('./assets/logo.png')}>
          </Image>
        </View>
      </View>        
    </View>
    <View style={styles.section1}>
      <View style={styles.detailBox}>
       <Text style={styles.name}>Hi John Pope</Text>
        <Text style={styles.notify}>You have an on-going class</Text>
        <Text style={styles.notify}>You have 1 new notificaton</Text>
       </View> 
     </View>
    <View style={styles.section3}>
        <View style={styles.icon}><TouchableOpacity><Image style={styles.courses} source={require('./assets/courses.png')}></Image></TouchableOpacity>
          <Text style={styles.iconText}>Courses</Text>
            </View>
               <View style={styles.icon}><TouchableOpacity><Image style={styles.courses} source={require('./assets/newspaper.png')}></Image></TouchableOpacity>
                 <Text style={styles.iconText}>News</Text>
                 </View>
                 <View style={styles.icon}><TouchableOpacity><Image style={styles.courses} source={require('./assets/online-class.png')}></Image></TouchableOpacity>
               <Text style={styles.iconText}>Classroom</Text>
            </View>
           <View style={styles.icon}><TouchableOpacity><Image style={styles.courses} source={require('./assets/active.png')}></Image></TouchableOpacity>
        <Text style={styles.iconText}>Notifications</Text>
       </View>
    </View>
    <View style={styles.section4}>
      <View style={{marginTop:8}}>
       <TouchableOpacity> <Image style={styles.gamesDesign} source={require('./assets/games.jpg')}/></TouchableOpacity>
          </View>
          <View style={styles.courseDescMain}>
            <Text style={styles.courseDesc}>
              <TouchableOpacity><Text style={{fontWeight: 'bold', fontSize: 13}}>Bachelor of Arts in Games Design</Text></TouchableOpacity>
              {'\n'}The BA(Hons) in Games Design is a programme specially developed with 
              a comprehensive approach to developing the right mindsets in games industry,
              specially in the area of games design. This programme is designed to be 
              highly practical and industry-oriented. The outline of the programme
              concentrates on all stages of the production process similar to the workflow
              practiced by professsionals from related industries. 
            </Text>
          </View>
    </View>
    <View style={styles.section4a}>
      <View style={{marginTop:8}}>
       <TouchableOpacity> <Image style={styles.gamesDesign} source={require('./assets/se.jpg')}/></TouchableOpacity>
          </View>
            <View style={styles.courseDescMain}>
              <Text style={styles.courseDesc}>
              <TouchableOpacity> <Text style={{fontWeight: 'bold', fontSize: 12}}>Bachelor of Science in Software Engineering with Mutlimedia</Text></TouchableOpacity>
               {'\n'}This programme will direct students to the development and use Mutlimedia systems. Students are exposed and trainend in the
               relevant programming skills with the use of multimedia skills. Theoretical and technical understanding of the role of communication 
               technology and tools as applied to distributed multimedia. Programming skills: Developing skills and in-depth understanding of the
               use multimedia tools with programming languages for internet and World Wide Web applications and also learning the importance
               of interactive design in computer programming.
            </Text>
          </View>
    </View>
    <View style={styles.section4}>
      <View style={{marginTop:8}}>
       <TouchableOpacity><Image style={styles.gamesDesign} source={require('./assets/marketing.jpg')}/></TouchableOpacity>
          </View>
          <View style={styles.courseDescMain}>
            <Text style={styles.courseDesc}>
             <TouchableOpacity> <Text style={{fontWeight: 'bold', fontSize: 13}}>Bachelor of Arts Business in Marketing</Text></TouchableOpacity>
              {'\n'}This programme aims to equip students with a solid foundation for various business desciplines, which focuses on marketing
                and communication on areas such as:
                Business Tools: exposure to communication and representation skills, statistics, accounting and economic. Adapting 
                techniques of marketing to enable them to discover opportunities and develop strategies to exploit them.
             </Text>
           </View>
         </View>
       <StatusBar style="auto" />
     </View>
   </ScrollView>
  );  
}

const styles = StyleSheet.create({ 
  main: {
    flex: 1
  },

  header: {
    //flexDirection: 'row',
    
  },
  top: {
    height:50,
    flexDirection:'row',
    flex: 1,
    backgroundColor: '#000',
    padding: 7,
    paddingBottom: 25,
    justifyContent:'space-between'
    
   
  },
  section1: {
    flexDirection: 'row',
  },
 
  options: {
    height: 47,
    width: 38,
    
    
  },
  name: {
    color: '#fff',
    fontSize: 25
  },
  detailBox: {
    flex: 1,
    height: 130,
    backgroundColor: '#000',
    padding: 7,
    borderBottomColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  notify: {
    color: '#fff',
    fontSize: 18,
    paddingTop: 10
  },
  logo: {
    height: 48,
    width: 130,
  },
  section3: {
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 150,
    justifyContent:'center',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  icon: {
    backgroundColor: '#fff',
    height: 98,
    width: 72,
    borderRadius: 10,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:  '#7F8C8D'
    
  },

  courses: {
    height: 45,
    width: 45,  
  },

  iconText: {
    fontWeight: 'bold',
    fontSize: 10
  },

  section4: {
    backgroundColor: '#000',
    height: 220,
    borderTopColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 7,
    flexDirection: 'row',
  },
  section4a: {
    backgroundColor: '#000',
    height: 300,
    borderTopColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 7,
    flexDirection: 'row',
  },

  gamesDesign: {
    height: 160,
    width: 140,
    borderRadius: 10
  },

  courseDesc: {
    color: '#fff',
    fontSize: 10,
    width:170
  },
  courseDescMain: {
    flexWrap: 'wrap',
    padding: 5,
    flexDirection: 'column'
  }

});
