"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ClipboardList, User, Home, Upload } from "lucide-react";


// Airbnb-style Home Repair Task App – Realtor Portal Ready

export default function HomeRepairTaskApp() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    clientName: "",
    company: "",
    email: "",
    propertyLocation: "",
    taskCategory: "",
    tasks: "",
    comments: "",
    priority: "standard",
  });

  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div style={{
  minHeight: "100vh",
  background: "#f9fafb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 24
}}>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl">
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-8 space-y-6">
            <h1 className="text-3xl font-semibold text-center">Mundo TLC – Submit Property Task</h1>
            <p className="text-center text-gray-500">Realtor-only repair request portal</p>

            {/* STEP 1 – REALTOR INFO */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <User className="w-5 h-5" /> Realtor Information
                </div>
                <Input placeholder="Realtor Name" value={form.clientName} onChange={(e) => updateField("clientName", e.target.value)} />
                <Input placeholder="Company / Brokerage" value={form.company} onChange={(e) => updateField("company", e.target.value)} />
                <Input placeholder="Email Address" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
              </div>
            )}

            {/* STEP 2 – PROPERTY CARD */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <Home className="w-5 h-5" /> Property Information
                </div>
                <Input placeholder="Property Address (Google Maps Ready)" value={form.propertyLocation} onChange={(e) => updateField("propertyLocation", e.target.value)} />
                <Select onValueChange={(v) => updateField("priority", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="urgent">Urgent (24–48 hrs)</SelectItem>
                    <SelectItem value="rush">Rush (Same Day)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* STEP 3 – TASKS */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <ClipboardList className="w-5 h-5" /> Repair Tasks
                </div>
                <Select onValueChange={(v) => updateField("taskCategory", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Task Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="painting">Painting</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="punch">Punch List</SelectItem>
                    <SelectItem value="general">General Repair</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Describe tasks needed" value={form.tasks} onChange={(e) => updateField("tasks", e.target.value)} />
                <Textarea placeholder="Comments / Access Instructions" value={form.comments} onChange={(e) => updateField("comments", e.target.value)} />
              </div>
            )}

            {/* STEP 4 – UPLOADS & SUBMIT */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <Upload className="w-5 h-5" /> Photos (Optional)
                </div>
                <Input type="file" multiple />
                <p className="text-sm text-gray-500">Upload photos of the property or problem areas</p>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
              {step < 4 ? (
                <button style={{
  padding: "10px 16px",
  borderRadius: 8,
  background: "#000",
  color: "#fff",
  border: "none",
  cursor: "pointer"
}}>

              ) : (
                <button style={{
  padding: "10px 16px",
  borderRadius: 8,
  background: "#000",
  color: "#fff",
  border: "none",
  cursor: "pointer"
}}>

              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
