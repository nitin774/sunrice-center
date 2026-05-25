import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbyKcSUgy0HEb0RhxiJNYpPJwBfS1qMJvQhu21u2xDLiSvv8YaP44samY0QgG9D7YIM/exec";
const WA_URL =
  "https://wa.me/918279612861?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sunrise%20IVF%20Center.";
const PHONE = "8279612861";

const services = [
  "IVF Treatment",
  "IUI Treatment",
  "Fertility Consultation",
  "Pregnancy Care",
  "Infertility Diagnosis",
  "Women Health Care",
  "Other",
];

const times = [
  "Morning (10AM – 12PM)",
  "Afternoon (12PM – 3PM)",
  "Evening (3PM – 6PM)",
];

export default function AppointmentScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : insets.bottom;

  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    preferredDate: "",
    serviceNeeded: "",
    preferredTime: "",
    messageConcern: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = async () => {
    if (!form.fullName || !form.phoneNumber || !form.preferredDate) {
      Alert.alert("Missing Info", "Please fill in your name, phone number, and preferred date.");
      return;
    }
    setStatus("loading");
    try {
      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          formType: "appointment",
          ...form,
          serviceNeeded: selectedService,
          preferredTime: selectedTime,
        }),
      });
      setStatus("success");
      setForm({ fullName: "", phoneNumber: "", email: "", preferredDate: "", serviceNeeded: "", preferredTime: "", messageConcern: "" });
      setSelectedService("");
      setSelectedTime("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingTop: topPad + 8, paddingBottom: bottomPad + 90, paddingHorizontal: 20 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={[styles.pageTitle, { color: colors.foreground }]}>Book Appointment</Text>
      <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
        Fill in your details and we'll confirm within 24 hours
      </Text>

      {status === "success" && (
        <View style={[styles.successBanner, { backgroundColor: "#d1fae5", borderColor: "#6ee7b7" }]}>
          <Feather name="check-circle" size={18} color="#059669" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={[styles.bannerTitle, { color: "#065f46" }]}>Sent Successfully!</Text>
            <Text style={[styles.bannerSub, { color: "#047857" }]}>We'll contact you within 24 hours.</Text>
          </View>
        </View>
      )}

      {status === "error" && (
        <View style={[styles.successBanner, { backgroundColor: "#fee2e2", borderColor: "#fca5a5" }]}>
          <Feather name="alert-circle" size={18} color="#dc2626" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={[styles.bannerTitle, { color: "#7f1d1d" }]}>Couldn't send</Text>
            <TouchableOpacity onPress={() => Linking.openURL(WA_URL)}>
              <Text style={[styles.bannerSub, { color: "#25d366" }]}>WhatsApp us instead</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Quick Contact */}
      <View style={[styles.quickRow, { backgroundColor: colors.secondary }]}>
        <TouchableOpacity style={styles.quickBtn} onPress={() => Linking.openURL(WA_URL)}>
          <MaterialCommunityIcons name="whatsapp" size={22} color="#25d366" />
          <Text style={[styles.quickBtnText, { color: colors.foreground }]}>WhatsApp</Text>
        </TouchableOpacity>
        <View style={[styles.quickDivider, { backgroundColor: colors.border }]} />
        <TouchableOpacity style={styles.quickBtn} onPress={() => Linking.openURL(`tel:${PHONE}`)}>
          <Feather name="phone" size={20} color={colors.primary} />
          <Text style={[styles.quickBtnText, { color: colors.foreground }]}>Call Now</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.formCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <InputField
          label="Full Name *"
          icon="user"
          placeholder="Your full name"
          value={form.fullName}
          onChangeText={(v) => setForm((f) => ({ ...f, fullName: v }))}
          colors={colors}
        />
        <InputField
          label="Phone Number *"
          icon="phone"
          placeholder="+91 XXXXX XXXXX"
          value={form.phoneNumber}
          onChangeText={(v) => setForm((f) => ({ ...f, phoneNumber: v }))}
          keyboardType="phone-pad"
          colors={colors}
        />
        <InputField
          label="Email"
          icon="mail"
          placeholder="your@email.com"
          value={form.email}
          onChangeText={(v) => setForm((f) => ({ ...f, email: v }))}
          keyboardType="email-address"
          colors={colors}
        />
        <InputField
          label="Preferred Date *"
          icon="calendar"
          placeholder="DD/MM/YYYY"
          value={form.preferredDate}
          onChangeText={(v) => setForm((f) => ({ ...f, preferredDate: v }))}
          colors={colors}
        />

        <Text style={[styles.label, { color: colors.foreground }]}>Service Needed</Text>
        <View style={styles.chipRow}>
          {services.map((s) => (
            <TouchableOpacity
              key={s}
              style={[
                styles.chip,
                {
                  backgroundColor: selectedService === s ? colors.primary : colors.secondary,
                  borderColor: selectedService === s ? colors.primary : colors.border,
                },
              ]}
              onPress={() => setSelectedService(selectedService === s ? "" : s)}
            >
              <Text style={[styles.chipText, { color: selectedService === s ? "#fff" : colors.foreground }]}>
                {s}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.label, { color: colors.foreground }]}>Preferred Time</Text>
        <View style={styles.chipRow}>
          {times.map((t) => (
            <TouchableOpacity
              key={t}
              style={[
                styles.chip,
                {
                  backgroundColor: selectedTime === t ? colors.primary : colors.secondary,
                  borderColor: selectedTime === t ? colors.primary : colors.border,
                },
              ]}
              onPress={() => setSelectedTime(selectedTime === t ? "" : t)}
            >
              <Text style={[styles.chipText, { color: selectedTime === t ? "#fff" : colors.foreground }]}>
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.label, { color: colors.foreground }]}>Message / Concern</Text>
        <TextInput
          style={[styles.textarea, { color: colors.foreground, borderColor: colors.border, backgroundColor: colors.background }]}
          placeholder="Briefly describe your concern..."
          placeholderTextColor={colors.mutedForeground}
          value={form.messageConcern}
          onChangeText={(v) => setForm((f) => ({ ...f, messageConcern: v }))}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={[styles.submitBtn, { backgroundColor: colors.primary, opacity: status === "loading" ? 0.7 : 1 }]}
          onPress={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <>
              <Feather name="send" size={16} color="#fff" />
              <Text style={styles.submitBtnText}>Submit Appointment Request</Text>
            </>
          )}
        </TouchableOpacity>
        <Text style={[styles.privacyNote, { color: colors.mutedForeground }]}>
          Your information is private and secure.
        </Text>
      </View>
    </ScrollView>
  );
}

function InputField({
  label,
  icon,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  colors,
}: {
  label: string;
  icon: string;
  placeholder: string;
  value: string;
  onChangeText: (v: string) => void;
  keyboardType?: "default" | "phone-pad" | "email-address";
  colors: ReturnType<typeof useColors>;
}) {
  return (
    <View style={styles.fieldWrap}>
      <Text style={[styles.label, { color: colors.foreground }]}>{label}</Text>
      <View style={[styles.inputWrap, { borderColor: colors.border, backgroundColor: colors.background }]}>
        <Feather name={icon as any} size={16} color={colors.primary} style={{ marginRight: 8 }} />
        <TextInput
          style={[styles.input, { color: colors.foreground }]}
          placeholder={placeholder}
          placeholderTextColor={colors.mutedForeground}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType ?? "default"}
        />
      </View>
    </View>
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
    marginBottom: 16,
    lineHeight: 20,
  },
  successBanner: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 14,
  },
  bannerTitle: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  bannerSub: {
    fontSize: 12,
    fontFamily: "Inter_400Regular",
    marginTop: 2,
  },
  quickRow: {
    flexDirection: "row",
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    alignItems: "center",
  },
  quickBtn: {
    flex: 1,
    alignItems: "center",
    gap: 6,
    flexDirection: "row",
    justifyContent: "center",
  },
  quickBtnText: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  quickDivider: {
    width: 1,
    height: 28,
    marginHorizontal: 8,
  },
  formCard: {
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
  },
  fieldWrap: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontFamily: "Inter_500Medium",
    marginBottom: 6,
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
  },
  chipText: {
    fontSize: 12,
    fontFamily: "Inter_500Medium",
  },
  textarea: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    minHeight: 90,
    marginBottom: 18,
  },
  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 28,
    marginBottom: 10,
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },
  privacyNote: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
});
