import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const services = [
  {
    icon: "activity" as const,
    title: "IVF Treatment",
    desc: "In-Vitro Fertilisation using the latest reproductive technologies with excellent clinical outcomes.",
    color: "#db2777",
  },
  {
    icon: "droplet" as const,
    title: "IUI Treatment",
    desc: "Intrauterine Insemination — a minimally invasive procedure ideal for couples with mild infertility.",
    color: "#7c3aed",
  },
  {
    icon: "users" as const,
    title: "Fertility Consultation",
    desc: "Comprehensive evaluation of both partners to diagnose infertility and create a personalised plan.",
    color: "#2563eb",
  },
  {
    icon: "heart" as const,
    title: "Pregnancy Care",
    desc: "Complete antenatal care and high-risk pregnancy management for a safe journey.",
    color: "#059669",
  },
  {
    icon: "search" as const,
    title: "Infertility Diagnosis",
    desc: "Advanced diagnostics including semen analysis, hormonal profiling, HSG, and genetic screening.",
    color: "#d97706",
  },
  {
    icon: "shield" as const,
    title: "Women Health Care",
    desc: "Specialised care for endometriosis, PCOS, uterine fibroids, ovarian cysts, and more.",
    color: "#dc2626",
  },
];

export default function ServicesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingTop: topPad + 8, paddingBottom: bottomPad + 90, paddingHorizontal: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.pageTitle, { color: colors.foreground }]}>Our Services</Text>
      <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
        World-class treatments tailored to your unique needs
      </Text>

      {services.map((s) => (
        <View
          key={s.title}
          style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
        >
          <View style={[styles.iconWrap, { backgroundColor: s.color + "18" }]}>
            <Feather name={s.icon} size={22} color={s.color} />
          </View>
          <View style={styles.cardBody}>
            <Text style={[styles.cardTitle, { color: colors.foreground }]}>{s.title}</Text>
            <Text style={[styles.cardDesc, { color: colors.mutedForeground }]}>{s.desc}</Text>
            <Link href="/(tabs)/appointment" asChild>
              <TouchableOpacity style={styles.bookLink}>
                <Text style={[styles.bookLinkText, { color: colors.primary }]}>Book Consultation</Text>
                <Feather name="arrow-right" size={13} color={colors.primary} />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    marginBottom: 4,
    marginTop: 8,
  },
  pageSubtitle: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    marginBottom: 20,
    lineHeight: 20,
  },
  card: {
    flexDirection: "row",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    gap: 14,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 19,
    marginBottom: 10,
  },
  bookLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  bookLinkText: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
  },
});
