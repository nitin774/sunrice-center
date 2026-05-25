import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
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

const WA_URL =
  "https://wa.me/918279612861?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sunrise%20IVF%20Center.";
const PHONE = "8279612861";

const doctors = [
  {
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop",
    name: "Dr. Rehan",
    qual: "MBBS, Anesthesiologist",
    role: "Founder & Director",
    badge: "Founder",
    badgeColor: "#7c3aed",
    featured: false,
  },
  {
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop",
    name: "Dr. Shabina Khan",
    qual: "MBBS, MS Obstetrics & Gynaecology",
    role: "Co-Founder & Chief Consultant",
    badge: "Co-Founder",
    badgeColor: "#db2777",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop",
    name: "Dr. Minal Sharma",
    qual: "Embryologist",
    role: "Head of Lab",
    badge: "Embryology",
    badgeColor: "#059669",
    featured: false,
  },
];

const staff = [
  { name: "Dr. Eram Warsi", role: "BAMS, DGO", desc: "Specialist in Gynaecology and Obstetrics with expertise in women's health." },
  { name: "Dr. Urvashi Yadav", role: "MBBS, MS Obstetrics", desc: "Dedicated to patient care and clinical support across all fertility treatments." },
  { name: "Dr. Talat Naaz", role: "Medical Officer", desc: "Compassionate care ensuring every patient receives personalised attention." },
];

export default function DoctorsScreen() {
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
      <Text style={[styles.pageTitle, { color: colors.foreground }]}>Our Doctors & Owners</Text>
      <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
        Dedicated specialists committed to your fertility journey
      </Text>

      {doctors.map((doc) => (
        <View
          key={doc.name}
          style={[
            styles.doctorCard,
            {
              backgroundColor: colors.card,
              borderColor: doc.featured ? colors.primary : colors.border,
              borderWidth: doc.featured ? 1.5 : 1,
            },
          ]}
        >
          <View style={styles.cardTop}>
            <Image source={{ uri: doc.img }} style={styles.docImg} />
            <View style={styles.docInfo}>
              <View style={[styles.docBadge, { backgroundColor: doc.badgeColor }]}>
                <Text style={styles.docBadgeText}>{doc.badge}</Text>
              </View>
              <Text style={[styles.docName, { color: colors.foreground }]}>{doc.name}</Text>
              <Text style={[styles.docQual, { color: colors.mutedForeground }]}>{doc.qual}</Text>
              <Text style={[styles.docRole, { color: colors.primary }]}>{doc.role}</Text>
            </View>
          </View>
          <View style={styles.docActions}>
            <TouchableOpacity
              style={[styles.waBtn, { backgroundColor: "#25d366" }]}
              onPress={() => Linking.openURL(WA_URL)}
            >
              <MaterialCommunityIcons name="whatsapp" size={15} color="#fff" />
              <Text style={styles.waBtnText}>Consult</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.callBtn, { borderColor: colors.primary }]}
              onPress={() => Linking.openURL(`tel:${PHONE}`)}
            >
              <Feather name="phone" size={14} color={colors.primary} />
              <Text style={[styles.callBtnText, { color: colors.primary }]}>Call</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Dedicated Staff */}
      <View style={styles.staffHeader}>
        <View style={[styles.badge, { backgroundColor: colors.secondary }]}>
          <Text style={[styles.badgeText, { color: colors.primary }]}>Our Team</Text>
        </View>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          Dedicated <Text style={{ color: colors.primary }}>Staff</Text>
        </Text>
      </View>

      {staff.map((s) => (
        <View
          key={s.name}
          style={[styles.staffCard, { backgroundColor: colors.card, borderColor: colors.border }]}
        >
          <View style={[styles.staffAvatar, { backgroundColor: colors.secondary }]}>
            <Feather name="user" size={20} color={colors.primary} />
          </View>
          <View style={styles.staffInfo}>
            <Text style={[styles.staffName, { color: colors.foreground }]}>{s.name}</Text>
            <Text style={[styles.staffRole, { color: colors.primary }]}>{s.role}</Text>
            <Text style={[styles.staffDesc, { color: colors.mutedForeground }]}>{s.desc}</Text>
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
  doctorCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  cardTop: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 14,
  },
  docImg: {
    width: 80,
    height: 90,
    borderRadius: 12,
  },
  docInfo: {
    flex: 1,
  },
  docBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginBottom: 6,
  },
  docBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "Inter_600SemiBold",
  },
  docName: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    marginBottom: 2,
  },
  docQual: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginBottom: 2,
    lineHeight: 18,
  },
  docRole: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
  docActions: {
    flexDirection: "row",
    gap: 10,
  },
  waBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
  },
  waBtnText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
  },
  callBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1.5,
    flex: 1,
    justifyContent: "center",
  },
  callBtnText: {
    fontSize: 13,
    fontFamily: "Inter_600SemiBold",
  },
  staffHeader: {
    marginTop: 8,
    marginBottom: 14,
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 8,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: "Inter_600SemiBold",
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
  },
  staffCard: {
    flexDirection: "row",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    gap: 12,
    alignItems: "flex-start",
  },
  staffAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  staffInfo: {
    flex: 1,
  },
  staffName: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 2,
  },
  staffRole: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
    marginBottom: 4,
  },
  staffDesc: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    lineHeight: 17,
  },
});
