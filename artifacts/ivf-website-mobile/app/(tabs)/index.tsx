import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const { width } = Dimensions.get("window");

const WA_URL =
  "https://wa.me/918279612861?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sunrise%20IVF%20Center.";
const PHONE = "8279612861";

const HERO_IMG =
  "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80&auto=format&fit=crop";

const stats = [
  { num: "2000+", label: "Families" },
  { num: "HIGH", label: "Success Rate" },
  { num: "15+", label: "Years Exp." },
  { num: "24/7", label: "Support" },
];

const highlights = [
  { icon: "check-circle" as const, text: "ISO 9001:2015 Certified Clinic" },
  { icon: "check-circle" as const, text: "FOGSI Member · Advanced Embryology Lab" },
  { icon: "check-circle" as const, text: "15+ Years of Excellence" },
  { icon: "check-circle" as const, text: "Expert Multidisciplinary Team" },
];

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingBottom: bottomPad + 90 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={[styles.heroContainer, { paddingTop: topPad }]}>
        <Image source={{ uri: HERO_IMG }} style={styles.heroBg} blurRadius={2} />
        <LinearGradient
          colors={["rgba(219,39,119,0.82)", "rgba(124,58,237,0.78)"]}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.heroContent}>
          <View style={styles.heroBadge}>
            <Feather name="award" size={12} color="#fff" />
            <Text style={styles.heroBadgeText}>Trusted Fertility Centre · Shahjahanpur</Text>
          </View>
          <Text style={styles.heroTitle}>
            Sunrise IVF Center{"\n"}
            <Text style={styles.heroTitleAccent}>Shahjahanpur</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Advanced Fertility & IVF Care with Compassion — led by Dr. Shabina Khan
          </Text>
          <View style={styles.heroButtons}>
            <Link href="/(tabs)/appointment" asChild>
              <TouchableOpacity style={styles.btnWhite}>
                <Feather name="calendar" size={15} color={colors.primary} />
                <Text style={[styles.btnWhiteText, { color: colors.primary }]}>Book Appointment</Text>
              </TouchableOpacity>
            </Link>
            <TouchableOpacity
              style={styles.btnWa}
              onPress={() => Linking.openURL(WA_URL)}
            >
              <MaterialCommunityIcons name="whatsapp" size={16} color="#fff" />
              <Text style={styles.btnWaText}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={[styles.statsRow, { backgroundColor: colors.background }]}>
        {stats.map((s) => (
          <View key={s.label} style={styles.statItem}>
            <Text style={[styles.statNum, { color: colors.primary }]}>{s.num}</Text>
            <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* About */}
      <View style={[styles.section, { backgroundColor: colors.background }]}>
        <View style={[styles.badge, { backgroundColor: colors.secondary }]}>
          <Text style={[styles.badgeText, { color: colors.primary }]}>About Sunrise IVF</Text>
        </View>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          Turning Dreams into{" "}
          <Text style={{ color: colors.primary }}>Reality</Text>
        </Text>
        <Text style={[styles.bodyText, { color: colors.mutedForeground }]}>
          Sunrise IVF Center is Shahjahanpur's premier fertility clinic, committed to helping couples overcome infertility through advanced, compassionate care. Under the expert guidance of Dr. Shabina Khan, we blend cutting-edge reproductive technology with heartfelt support.
        </Text>

        {highlights.map((h) => (
          <View key={h.text} style={styles.checkRow}>
            <Feather name={h.icon} size={16} color={colors.primary} />
            <Text style={[styles.checkText, { color: colors.foreground }]}>{h.text}</Text>
          </View>
        ))}

        <View style={[styles.timingCard, { backgroundColor: colors.secondary, borderColor: colors.border }]}>
          <Feather name="clock" size={18} color={colors.primary} />
          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.timingDay, { color: colors.foreground }]}>Every Day</Text>
            <Text style={[styles.timingTime, { color: colors.primary }]}>10:00 AM – 6:00 PM</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.callBtn, { backgroundColor: colors.primary }]}
          onPress={() => Linking.openURL(`tel:${PHONE}`)}
        >
          <Feather name="phone" size={16} color="#fff" />
          <Text style={styles.callBtnText}>Call Now: {PHONE}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    height: 420,
    overflow: "hidden",
    position: "relative",
  },
  heroBg: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  heroContent: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-end",
    paddingBottom: 32,
  },
  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  heroBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontFamily: "Inter_500Medium",
  },
  heroTitle: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    color: "#fff",
    lineHeight: 36,
    marginBottom: 10,
  },
  heroTitleAccent: {
    color: "#fce7f3",
  },
  heroSubtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.88)",
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    marginBottom: 20,
  },
  heroButtons: {
    flexDirection: "row",
    gap: 10,
  },
  btnWhite: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    flex: 1,
    justifyContent: "center",
  },
  btnWhiteText: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
  },
  btnWa: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#25d366",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    justifyContent: "center",
  },
  btnWaText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
  },
  statsRow: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#fce7f3",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNum: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
  },
  statLabel: {
    fontSize: 10,
    fontFamily: "Inter_400Regular",
    marginTop: 2,
    textAlign: "center",
  },
  section: {
    padding: 24,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    marginBottom: 12,
    lineHeight: 32,
  },
  bodyText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 22,
    marginBottom: 16,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  checkText: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    flex: 1,
  },
  timingCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 16,
    marginBottom: 16,
  },
  timingDay: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  timingTime: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
    marginTop: 2,
  },
  callBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 28,
  },
  callBtnText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },
});
