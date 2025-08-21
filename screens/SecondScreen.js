import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";


export default function SecondScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.content}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/secondScreen/NextIcon.png')} style={styles.buttonback} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/secondScreen/Group.png')} style={styles.buttonback} />
                    </TouchableOpacity>
                </View>
                <View style={styles.profileCard}>
                    <Image source={require('../assets/secondScreen/ProfilePic.png')} style={styles.profileImage} />
                    <Text style={styles.profileName}>Profile Name</Text>
                    <View style={styles.profilInfo}>
                        <View style={[styles.indentsInsideTheProfile, styles.borderProfilInfo]}> <Text style={styles.boldText}>3,8K</Text> <Text>Подписчиков</Text> </View>
                        <View style={[styles.indentsInsideTheProfile, styles.borderProfilInfo]}> <Text style={styles.boldText}>5,4K</Text> <Text>Лайки</Text> </View>
                        <View style={styles.indentsInsideTheProfile}> <Text style={styles.boldText} >7</Text> <Text>Публикации</Text> </View>
                    </View>
                    <View style={styles.profilebtnCard}>
                        <TouchableOpacity style={styles.profilebtn} > <Text style={styles.profileInBtn}> Подписаться </Text></TouchableOpacity>
                        <Image source={require('../assets/secondScreen/Telegram.png')} style={styles.profileIcon} />
                        <Image source={require('../assets/secondScreen/Inst.png')} style={styles.profileIcon} />
                    </View>
                    <View style={styles.textInProfileCard}>
                        <Text style={styles.textInProfile}>Сотворю твой успех с помощью 100+ огненных образов.
                            Моими капсулами пользуются более 2500 девушек —
                            присоединяйся и ты!</Text>
                    </View>
                </View>
                <View style={styles.mainConteiner}>
                    <Image source={require('../assets/secondScreen/FeedImabe.png')} style={styles.mainCard} />
                    <Image source={require('../assets/secondScreen/Pic.png')} style={styles.mainCard} />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#efeef3',

    },
    container: {
        flex: 1,
        backgroundColor: '#efeef3',
        paddingLeft: 25,
        paddingRight: 25,
    },
    header: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonback: {
        width: 24,
        height: 24,
    },
    profileCard: {

        width: "100%",
        height: 245,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        marginTop: 50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    profileImage: {
        position: "absolute",
        top: -45,
    },
    profileName: {
        marginTop: 10,
        fontWeight: "bold",
    },
    boldText: {
        fontWeight: "bold",
    },
    profilInfo: {
        // width: "100%",
        flexDirection: "row",
        // justifyContent: "space-around",
    },
    borderProfilInfo: {
        paddingRight: 10,
        borderRightWidth: 2,
        borderRightColor: "#D9D9D9",
        borderStyle: "solid",
    },
    indentsInsideTheProfile: {
        alignItems: "center",
        margin: 15,
    },
    profilebtnCard: {
        flexDirection: "row",
    },
    profilebtn: {
        marginRight: 10,
        width: 146,
        height: 40,
        backgroundColor: "black",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    profileInBtn: {
        color: "white",
        fontSize: 16,
    },
    profileIcon: {
        width: 40,
        height: 40,
        // justifyContent:"space-between",
        marginRight: 20,
    },
    textInProfileCard: {
        width: 278,
        height: 45,
    },
    textInProfile: {
        marginTop: 15,
        fontSize: 12,
    },
    mainConteiner: {
        flexDirection:"row",
        marginTop: 20,
        padding:10,
        width: "100%",
        height: 944,
        backgroundColor: "white",
        
    },
    mainCard:{
        width: 152,
        height: 215,
        margin: 5,
    }
})