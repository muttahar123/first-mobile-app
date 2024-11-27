import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Home(){
    return(
        <View style={{
            flex: 1,
            // borderWidth:2,
            // borderColor:"red"
        }}>

        <View style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#302C3D"
        }}>
            <Image 
            source={require("@/assets/images/home.png")} 
            resizeMode="contain" 
            style={{width: "100%", height: "100%"}} 
            />
        </View>

        <View style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
        }}>

        <Text style={{ 
            fontSize: 24,
            fontWeight: 900,
            fontFamily: "sans",
            textAlign:"center",
            marginHorizontal: "15%"
        }}>Meet people with same interests</Text>

              <Text style={{
            fontSize: 16,
            fontWeight: 100,
            fontFamily: "sans-serif",
            textAlign:"center",
            opacity: 0.5,
            marginHorizontal: "5%"
            }}>Reccess gives you the opportunity to bond with people with same interests</Text>

              <Text style={{ borderWidth:2,
            fontSize: 16,
            fontWeight: 100,
            fontFamily: "sans",
            backgroundColor: "#302C3D",
            textAlign:"center",
            marginHorizontal: "5%",
            paddingVertical: "3%",
            paddingHorizontal: "28%",
            borderRadius: 12,
            color: "white"
            }}>Continue</Text>

        </View>

        </View>
    )
}