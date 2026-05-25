import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
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

const PHONE = "8279612861";
const PHONE2 = "8279683949";
const EMAIL = "sunriseshahjahanpur@gmail.com";
const WA_URL =
  "https://wa.me/918279612861?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sunrise%20IVF%20Center.";
const MAPS_LINK = "https://maps.app.goo.gl/2pTCzudTQX1qamH66";
const FB_URL = "https://www.facebook.com/profile.php?id=61588657432206&sk=reels_tab";
const IG_URL = "https://www.instagram.com/sunrise_ivf_shahjahanpur?igsh=bnRudnowajM4aDFl";

const faqs = [
  { q: "What is IVF and how does it work?", a: "IVF (In-Vitro Fertilisation) is a fertility treatment where eggs are retrieved from the ovaries and fertilised with sperm in a laboratory. The resulting embryos are transferred to the uterus." },
  { q: "What is the success rate at Sunrise IVF?", a: "Our IVF outcomes are among the best in the region. Success depends on factors like age, egg quality, sperm quality, and cause of infertility. Dr. Shabina Khan will discuss realistic expectations during your consultation." },
  { q: "How many IVF cycles will I need?", a: "Most couples achieve success within 2-3 cycles. Every case is unique. We'll create a personalised plan based on your medical profile." },
  { q: "Is IVF treatment painful?", a: "IVF involves daily hormone injections which can cause mild discomfort. The egg retrieval is done under sedation. Our team ensures your comfort throughout." },
  { q: "What is the cost of IVF treatment?", a: "IVF costs vary depending on the protocol and any additional procedures required. We believe in transparent pricing and will provide a detailed cost breakdown during your consultation. EMI options are available." },
  { q: "How long does an IVF cycle take?", a: "A single IVF cycle typically takes 4-6 weeks from the start of medications to the embryo transfer." },
];

export default function ContactScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactItems = [
    {
      icon: "map-pin" as const,
      label: "Address",
      value: "Pilibhit Bypass Road, Shahjahanpur, Uttar Pradesh",
      onPress: () => Linking.openURL(MAPS_LINK),
    },
    {
      icon: "phone" as const,
      label: "Phone",
      value: `${PHONE} / ${PHONE2}`,
      onPress: () => Linking.openURL(`tel:${PHONE}`),
    },
    {
      icon: "mail" as const,
      label: "Email",
      value: EMAIL,
      onPress: () => Linking.openURL(`mailto:${EMAIL}`),
    },
    {
      icon: "clock" as const,
      label: "Hours",
      value: "Every Day: 10:00 AM – 6:00 PM",
      onPress: undefined,
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingTop: topPad + 8, paddingBottom: bottomPad + 90, paddingHorizontal: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.pageTitle, { color: colors.foreground }]}>Contact Us</Text>
      <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
        We're here to guide you every step of the way
      </Text>

      {/* Quick Action Row */}
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: "#25d366" }]}
          onPress={() => Linking.openURL(WA_URL)}
        >
          <MaterialCommunityIcons name="whatsapp" size={22} color="#fff" />
          <Text style={styles.actionBtnText}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: colors.primary }]}
          onPress={() => Linking.openURL(`tel:${PHONE}`)}
        >
          <Feather name="phone" size={20} color="#fff" />
          <Text style={styles.actionBtnText}>Call Now</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Info */}
      <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {contactItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.contactRow}
            onPress={item.onPress}
            disabled={!item.onPress}
            activeOpacity={item.onPress ? 0.7 : 1}
          >
            <View style={[styles.iconCircle, { backgroundColor: colors.secondary }]}>
              <Feather name={item.icon} size={16} color={colors.primary} />
            </View>
            <View style={styles.contactText}>
              <Text style={[styles.contactLabel, { color: colors.mutedForeground }]}>{item.label}</Text>
              <Text style={[styles.contactValue, { color: item.onPress ? colors.primary : colors.foreground }]}>
                {item.value}
              </Text>
            </View>
            {item.onPress && <Feather name="chevron-right" size={16} color={colors.mutedForeground} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Social Links */}
      <View style={[styles.socialCard, { backgroundColor: colors.secondary, borderColor: colors.border }]}>
        <Text style={[styles.socialTitle, { color: colors.foreground }]}>Follow Us</Text>
        <View style={styles.socialRow}>
          <TouchableOpacity
            style={[styles.socialBtn, { backgroundColor: "#1877f2" }]}
            onPress={() => Linking.openURL(FB_URL)}
          >
            <MaterialCommunityIcons name="facebook" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialBtn, { backgroundColor: "#e1306c" }]}
            onPress={() => Linking.openURL(IG_URL)}
          >
            <MaterialCommunityIcons name="instagram" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.socialBtn, { backgroundColor: "#25d366" }]}
            onPress={() => Linking.openURL(WA_URL)}
          >
            <MaterialCommunityIcons name="whatsapp" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* FAQ */}
      <Text style={[styles.faqTitle, { color: colors.foreground }]}>
        Common <Text style={{ color: colors.primary }}>Questions</Text>
      </Text>
      {faqs.map((faq, i) => (
        <TouchableOpacity
          key={i}
          style={[styles.faqItem, { backgroundColor: colors.card, borderColor: openFaq === i ? colors.primary : colors.border }]}
          onPress={() => setOpenFaq(openFaq === i ? null : i)}
          activeOpacity={0.8}
        >
          <View style={styles.faqHeader}>
            <Text style={[styles.faqQ, { color: colors.foreground, flex: 1 }]}>{faq.q}</Text>
            <Feather
              name={openFaq === i ? "chevron-up" : "chevron-down"}
              size={18}
              color={colors.primary}
            />
          </View>
          {openFaq === i && (
            <Text style={[styles.faqA, { color: colors.mutedForeground }]}>{faq.a}</Text>
          )}
        </TouchableOpacity>
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
  actionRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  actionBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 28,
  },
  actionBtnText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },
  infoCard: {
    borderRadius: 16,
    padding: 4,
    borderWidth: 1,
    marginBottom: 16,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  contactText: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 11,
    fontFamily: "Inter_500Medium",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  contactValue: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
    marginTop: 2,
  },
  socialCard: {
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    marginBottom: 24,
  },
  socialTitle: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 12,
  },
  socialRow: {
    flexDirection: "row",
    gap: 12,
  },
  socialBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  faqTitle: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
    marginBottom: 14,
  },
  faqItem: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
  },
  faqHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  faqQ: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    lineHeight: 20,
  },
  faqA: {
    fontSize: 13,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
    marginTop: 10,
  },
});
