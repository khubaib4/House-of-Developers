import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import {
  MessageSquare,
  Brain,
  Database,
  Sparkles,
  Clock,
  Globe,
  Zap,
  Headphones,
  Target,
  ShoppingBag,
  Calendar,
  Users,
  MessageCircle,
  Check,
  ArrowUp,
  Minus,
  X,
  Star,
  Smile,
  User,
  DollarSign,
  TrendingUp,
  BarChart,
  Share2,
  ShoppingCart,
  CreditCard,
  Mail,
  Lock,
  Plug,
  Hash,
  Smartphone,
  LifeBuoy,
  Ticket,
  Building,
  ArrowRight,
  Package,
  Image,
  Mic,
  Volume2,
  GitBranch,
  Code2,
  Phone,
  Link2,
  PieChart,
  Activity,
  Table,
  BarChart3,
  LineChart,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import { Link } from "wouter";

const CHATBOT_COLOR = "#A855F7";

function ChatWidgetMockup() {
  const products = [
    { name: "Nike Revolution 6", price: "£79.99", rating: "4.5", reviews: "234" },
    { name: "Adidas Runfalcon 3", price: "£64.99", rating: "4.3", reviews: "189" },
    { name: "New Balance 520v8", price: "£89.99", rating: "4.6", reviews: "312" },
  ];

  return (
    <div className="relative" data-testid="chat-widget-mockup">
      <div className="rounded-2xl border bg-muted/50 p-4 blur-[2px] opacity-60">
        <div className="flex items-center gap-2 mb-4 border-b pb-3">
          <div className="w-8 h-8 rounded-full bg-purple-500/20" />
          <div className="h-3 w-24 bg-muted-foreground/20 rounded" />
          <div className="ml-auto flex gap-2">
            <div className="h-3 w-12 bg-muted-foreground/20 rounded" />
            <div className="h-3 w-8 bg-muted-foreground/20 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border p-3">
              <div className="aspect-square bg-muted-foreground/10 rounded mb-2" />
              <div className="h-2 w-full bg-muted-foreground/15 rounded mb-1" />
              <div className="h-2 w-2/3 bg-muted-foreground/15 rounded" />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute -bottom-4 -right-4 w-[340px] md:w-[380px] bg-card rounded-2xl shadow-2xl border overflow-hidden"
        style={{ boxShadow: "0 0 40px rgba(168, 85, 247, 0.15)" }}
      >
        <div
          className="p-3 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}
        >
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">AI Assistant</p>
            <p className="text-white/70 text-xs">Online - Responds in seconds</p>
          </div>
          <div className="flex gap-1.5">
            <Minus className="h-4 w-4 text-white/70" />
            <X className="h-4 w-4 text-white/70" />
          </div>
        </div>

        <div className="p-3 space-y-3 max-h-[340px] overflow-hidden bg-card">
          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}>
              <MessageSquare className="h-3 w-3 text-white" />
            </div>
            <div>
              <div className="bg-muted rounded-2xl rounded-tl-sm p-2.5 text-sm max-w-[260px]">
                Hi! I'm your AI shopping assistant. How can I help you today?
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">2:14 PM</p>
              <div className="flex gap-1.5 flex-wrap mt-1.5">
                {["Track my order", "Product recommendations", "Return policy", "Talk to human"].map((q) => (
                  <span key={q} className="text-[10px] px-2 py-1 rounded-full border text-muted-foreground">{q}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <div>
              <div className="rounded-2xl rounded-tr-sm p-2.5 text-sm text-white max-w-[260px]"
                style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}>
                I'm looking for running shoes under £100
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5 text-right">2:15 PM</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
              <User className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}>
              <MessageSquare className="h-3 w-3 text-white" />
            </div>
            <div>
              <div className="bg-muted rounded-2xl rounded-tl-sm p-2.5 text-sm max-w-[260px]">
                Great choice! I found 3 popular options for you:
              </div>
              <div className="mt-1.5 space-y-1.5">
                {products.map((p) => (
                  <div key={p.name} className="bg-muted rounded-lg p-2 flex items-center gap-2 max-w-[260px]">
                    <div className="w-10 h-10 rounded bg-muted-foreground/10 flex-shrink-0 flex items-center justify-center">
                      <Package className="h-4 w-4 text-muted-foreground/50" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium truncate">{p.name} - {p.price}</p>
                      <p className="text-[10px] text-muted-foreground">{p.rating} ({p.reviews} reviews)</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <div>
              <div className="rounded-2xl rounded-tr-sm p-2.5 text-sm text-white max-w-[260px]"
                style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}>
                Tell me about the Nike Revolution 6
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5 text-right">2:16 PM</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
              <User className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}>
              <MessageSquare className="h-3 w-3 text-white" />
            </div>
            <div className="bg-muted rounded-2xl rounded-tl-sm p-2.5 flex gap-1 items-center">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.3 }}
                />
              ))}
              <span className="text-[10px] text-muted-foreground ml-1">AI is typing...</span>
            </div>
          </div>
        </div>

        <div className="border-t p-2.5 bg-card flex items-center gap-2">
          <input
            className="flex-1 bg-muted rounded-lg px-3 py-1.5 text-sm border-0 outline-none"
            placeholder="Type your message..."
            readOnly
            data-testid="chat-mockup-input"
          />
          <Smile className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}>
            <ArrowUp className="h-3.5 w-3.5 text-white" />
          </div>
        </div>

        <div className="absolute -bottom-6 right-4">
          <span className="text-[10px] bg-muted px-2 py-1 rounded text-muted-foreground">Powered by GPT-4</span>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="absolute -top-2 -left-2">
        <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate shadow-sm">
          Natural Language
        </Badge>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
        className="absolute top-6 -right-2">
        <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate shadow-sm">
          CRM Connected
        </Badge>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-24 -left-2">
        <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate shadow-sm">
          Instant Responses
        </Badge>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="absolute top-20 -right-8 hidden lg:block">
        <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate shadow-sm">
          Product Integration
        </Badge>
      </motion.div>
    </div>
  );
}

interface ChatMessage {
  role: "bot" | "user";
  text: string;
  time?: string;
  extra?: "order-card" | "lead-score" | "calendar" | "product-cards" | "product-detail" | "cart-summary" | "handoff-button" | "quick-replies" | "budget-options" | "dress-options" | "season-options" | "length-options" | "budget-range";
  extraData?: Record<string, string | string[]>;
}

function ConversationDemo({ title, company, messages, metrics }: {
  title: string;
  company: string;
  messages: ChatMessage[];
  metrics: { label: string; value: string }[];
}) {
  return (
    <Card className="p-0 overflow-hidden" data-testid={`demo-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-center justify-between gap-2 p-4 border-b">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">{title}</Badge>
          <span className="text-sm text-muted-foreground">{company}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-muted-foreground">AI Assistant - Online</span>
        </div>
      </div>

      <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.role === "bot" ? (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}>
                  <MessageSquare className="h-3 w-3 text-white" />
                </div>
                <div className="max-w-[85%]">
                  <div className="bg-muted rounded-2xl rounded-tl-sm p-3 text-sm">{msg.text}</div>
                  {msg.time && <p className="text-[10px] text-muted-foreground mt-0.5">{msg.time}</p>}

                  {msg.extra === "order-card" && msg.extraData && (
                    <div className="mt-2 bg-muted rounded-lg p-3 border text-xs space-y-1">
                      <p className="font-semibold">{msg.extraData.order}</p>
                      <p>{msg.extraData.product}, {msg.extraData.price}</p>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>Status: {msg.extraData.status}</span>
                      </div>
                      <p className="text-muted-foreground">Est. Delivery: {msg.extraData.delivery}</p>
                    </div>
                  )}

                  {msg.extra === "handoff-button" && (
                    <div className="mt-2">
                      <Button size="sm" variant="outline" data-testid="button-continue-support">Continue with Support Team</Button>
                    </div>
                  )}

                  {msg.extra === "quick-replies" && msg.extraData?.options && (
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      {(msg.extraData.options as unknown as string[]).map((opt: string) => (
                        <span key={opt} className="text-[11px] px-2.5 py-1 rounded-full border text-muted-foreground">{opt}</span>
                      ))}
                    </div>
                  )}

                  {msg.extra === "budget-options" && (
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      {["<£5K", "£5K-£15K", "£15K-£30K", "£30K+"].map((opt) => (
                        <span key={opt} className="text-[11px] px-2.5 py-1 rounded-full border text-muted-foreground">{opt}</span>
                      ))}
                    </div>
                  )}

                  {msg.extra === "lead-score" && msg.extraData && (
                    <div className="mt-2 bg-muted rounded-lg p-2 border text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <Target className="h-3 w-3 text-green-500" />
                        <span className="font-semibold">Lead Score: {msg.extraData.score} - {msg.extraData.priority}</span>
                      </div>
                    </div>
                  )}

                  {msg.extra === "calendar" && (
                    <div className="mt-2 space-y-1">
                      {["Tomorrow 2:00 PM", "Tomorrow 4:30 PM", "Friday 10:00 AM"].map((slot) => (
                        <div key={slot} className="text-[11px] px-3 py-1.5 rounded-lg border bg-card flex items-center gap-1.5">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{slot}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {msg.extra === "dress-options" && (
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      {["Casual", "Semi-Formal", "Formal", "Black Tie"].map((opt) => (
                        <span key={opt} className="text-[11px] px-2.5 py-1 rounded-full border text-muted-foreground">{opt}</span>
                      ))}
                    </div>
                  )}

                  {msg.extra === "season-options" && (
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      {["Spring", "Summer", "Fall", "Winter"].map((opt) => (
                        <span key={opt} className="text-[11px] px-2.5 py-1 rounded-full border text-muted-foreground">{opt}</span>
                      ))}
                    </div>
                  )}

                  {msg.extra === "length-options" && (
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      {["Mini", "Midi", "Maxi", "Any"].map((opt) => (
                        <span key={opt} className="text-[11px] px-2.5 py-1 rounded-full border text-muted-foreground">{opt}</span>
                      ))}
                    </div>
                  )}

                  {msg.extra === "budget-range" && (
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      {["Under £50", "£50-£100", "£100-£200", "£200+"].map((opt) => (
                        <span key={opt} className="text-[11px] px-2.5 py-1 rounded-full border text-muted-foreground">{opt}</span>
                      ))}
                    </div>
                  )}

                  {msg.extra === "product-cards" && (
                    <div className="mt-2 space-y-1.5">
                      {[
                        { name: "Floral Print Midi Dress", price: "£149.99", rating: "4.8", reviews: "127", note: "Breathable fabric, perfect for summer" },
                        { name: "Satin Wrap Dress", price: "£179.99", rating: "4.9", reviews: "89", note: "Elegant silhouette" },
                        { name: "Pleated Chiffon Dress", price: "£159.99", rating: "4.7", reviews: "156", note: "Flowing movement" },
                      ].map((p) => (
                        <div key={p.name} className="bg-muted rounded-lg p-2.5 border text-xs">
                          <p className="font-semibold">{p.name}</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className="font-medium" style={{ color: CHATBOT_COLOR }}>{p.price}</span>
                            <span className="text-muted-foreground">{p.rating} ({p.reviews} reviews)</span>
                          </div>
                          <p className="text-muted-foreground mt-0.5">{p.note}</p>
                          <div className="flex gap-1.5 mt-1.5">
                            <Button size="sm" variant="outline" data-testid={`button-view-${p.name.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Button>
                            <Button size="sm" variant="outline" data-testid={`button-cart-${p.name.toLowerCase().replace(/\s+/g, "-")}`}>Add to Cart</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {msg.extra === "product-detail" && (
                    <div className="mt-2 bg-muted rounded-lg p-2.5 border text-xs space-y-1">
                      {["Available in 3 colors (pink, blue, yellow)", "Sizes 6-18 in stock", "Lightweight polyester blend", "Machine washable", "Free delivery (order today, arrives in 3 days)", "30-day free returns"].map((d) => (
                        <div key={d} className="flex items-center gap-1.5">
                          <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {msg.extra === "cart-summary" && (
                    <div className="mt-2 bg-muted rounded-lg p-2.5 border text-xs space-y-1">
                      <p className="font-semibold">Cart Summary:</p>
                      <p>Floral Midi Dress (Size 12) - £149.99</p>
                      <p>Nude Block Heels (Size 7) - £49.99</p>
                      <p>Pearl Clutch - £39.99</p>
                      <div className="border-t pt-1 mt-1 font-semibold">Total: £239.97</div>
                      <div className="flex gap-1.5 mt-1.5">
                        <Button size="sm" variant="outline" data-testid="button-view-cart">View Cart</Button>
                        <Button size="sm" data-testid="button-checkout">Checkout</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex gap-2 justify-end">
                <div className="max-w-[85%]">
                  <div className="rounded-2xl rounded-tr-sm p-3 text-sm text-white"
                    style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}>
                    {msg.text}
                  </div>
                  {msg.time && <p className="text-[10px] text-muted-foreground mt-0.5 text-right">{msg.time}</p>}
                </div>
                <div className="w-7 h-7 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
                  <User className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t p-3 flex items-center gap-3 flex-wrap">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
            <span className="font-medium">{m.value}</span>
            <span className="hidden sm:inline">-</span>
            <span className="hidden sm:inline">{m.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

const ecommerceMessages: ChatMessage[] = [
  { role: "bot", text: "Hi! Welcome to TechGear. How can I help you today?", time: "3:02 PM" },
  { role: "user", text: "I ordered a laptop 3 days ago but haven't received shipping confirmation", time: "3:03 PM" },
  { role: "bot", text: "I can help you with that! Let me check your order status. Could you provide your order number or the email address you used?" },
  { role: "user", text: "Email is john@example.com", time: "3:03 PM" },
  { role: "bot", text: "Thanks! I found your order #TG-45892 for the Dell XPS 13. It's currently being prepared for shipment. The estimated ship date is tomorrow (June 15th) with 2-day delivery.", extra: "order-card", extraData: { order: "Order #TG-45892", product: "Dell XPS 13", price: "£1,299", status: "Processing", delivery: "June 17th" } },
  { role: "bot", text: "You'll receive a tracking number via email within 24 hours. Is there anything else I can help with?" },
  { role: "user", text: "Can I change the delivery address?", time: "3:04 PM" },
  { role: "bot", text: "Since your order is still processing, I can help with that! However, address changes require verification. I'm connecting you with our support team who can update this securely. They typically respond within 5 minutes.", extra: "handoff-button" },
  { role: "user", text: "Thanks!", time: "3:05 PM" },
  { role: "bot", text: "You're welcome! Sarah from our team will message you shortly. Have a great day!" },
];

const leadQualMessages: ChatMessage[] = [
  { role: "bot", text: "Hi! I'm Alex, the AI assistant for Creative Solutions Agency. I'd love to learn about your marketing needs! What brings you to our site today?", time: "10:15 AM" },
  { role: "user", text: "We need help with digital marketing for our e-commerce business", time: "10:16 AM" },
  { role: "bot", text: "Excellent! E-commerce marketing is one of our specialties. To better assist you, could you share:", extra: "quick-replies", extraData: { options: ["Company size", "Monthly budget", "Current challenges"] as unknown as string[] } },
  { role: "user", text: "We have about 25 employees", time: "10:17 AM" },
  { role: "bot", text: "Great! And what's your approximate monthly marketing budget?", extra: "budget-options" },
  { role: "user", text: "£15K-£30K", time: "10:17 AM" },
  { role: "bot", text: "Perfect! You're exactly the size we work best with. What's your biggest marketing challenge right now?" },
  { role: "user", text: "Our conversion rate is really low, around 0.8%", time: "10:18 AM" },
  { role: "bot", text: "I understand\u2014conversion optimization is critical. We've helped similar e-commerce companies increase conversions from 0.8% to 2.5%+ using targeted campaigns and landing page optimization." },
  { role: "bot", text: "Based on your needs (e-commerce, 25 employees, £15K-£30K budget, conversion focus), I've scored you as a high-priority lead. Would you like to schedule a free strategy call with our senior strategist Sarah?", extra: "lead-score", extraData: { score: "92/100", priority: "High Priority" } },
  { role: "user", text: "Yes please", time: "10:19 AM" },
  { role: "bot", text: "Excellent! Sarah has availability:", extra: "calendar" },
  { role: "user", text: "Tomorrow 2:00 PM", time: "10:19 AM" },
  { role: "bot", text: "Perfect! I've booked you for tomorrow (June 13th) at 2:00 PM with Sarah. You'll receive a calendar invite and Zoom link at your email. Looking forward to helping grow your e-commerce business!" },
];

const fashionMessages: ChatMessage[] = [
  { role: "bot", text: "Welcome to StyleHub! I'm here to help you find the perfect outfit. What are you shopping for today?", time: "11:30 AM" },
  { role: "user", text: "I need a dress for a wedding", time: "11:31 AM" },
  { role: "bot", text: "How exciting! Wedding guest dresses are my specialty. Let me ask a few questions to find your perfect match:" },
  { role: "bot", text: "What's the dress code?", extra: "dress-options" },
  { role: "user", text: "Formal", time: "11:31 AM" },
  { role: "bot", text: "What season is the wedding?", extra: "season-options" },
  { role: "user", text: "Summer", time: "11:32 AM" },
  { role: "bot", text: "And what's your preferred length?", extra: "length-options" },
  { role: "user", text: "Midi", time: "11:32 AM" },
  { role: "bot", text: "What's your budget?", extra: "budget-range" },
  { role: "user", text: "£100-£200", time: "11:33 AM" },
  { role: "bot", text: "Excellent taste! Based on your preferences (formal summer wedding, midi length, £100-£200), here are my top 3 recommendations:", extra: "product-cards" },
  { role: "bot", text: "All three have free returns and come in sizes 6-18. Would you like to know more about any of these?" },
  { role: "user", text: "Tell me more about the floral one", time: "11:34 AM" },
  { role: "bot", text: "Great choice! The Floral Print Midi Dress is one of our bestsellers:", extra: "product-detail" },
  { role: "bot", text: "It also pairs beautifully with our nude block heels (£49.99) and pearl clutch (£39.99). Would you like me to add those to a saved cart?" },
  { role: "user", text: "Yes, add all three items", time: "11:35 AM" },
  { role: "bot", text: "Done! I've added everything to your cart:", extra: "cart-summary" },
  { role: "bot", text: "You're getting free delivery since your order is over £50! Ready to checkout or would you like to browse more?" },
];

const chatbotTypes = [
  { icon: Headphones, name: "Customer Support Chatbot", description: "24/7 automated support handling FAQs, troubleshooting, and ticket creation", useCases: ["Answer common questions instantly", "Troubleshoot technical issues", "Create support tickets for complex cases"], idealFor: "E-commerce, SaaS, Tech Companies", gradient: "from-purple-500 to-pink-500" },
  { icon: Target, name: "Lead Qualification Bot", description: "Engage website visitors, qualify leads, and route hot prospects to sales", useCases: ["Capture visitor information", "Ask qualifying questions", "Schedule sales calls automatically"], idealFor: "B2B, Agencies, Professional Services", gradient: "from-blue-500 to-cyan-500" },
  { icon: ShoppingBag, name: "Sales Assistant Bot", description: "Product recommendations, upselling, and guided shopping experience", useCases: ["Recommend products based on preferences", "Answer product questions", "Assist with checkout process"], idealFor: "E-commerce, Retail, Fashion", gradient: "from-green-500 to-teal-500" },
  { icon: Calendar, name: "Booking Chatbot", description: "Automate appointment scheduling, calendar integration, and reminders", useCases: ["Check availability in real-time", "Book appointments 24/7", "Send automated reminders"], idealFor: "Healthcare, Salons, Consultants", gradient: "from-orange-500 to-amber-500" },
  { icon: Users, name: "Internal Support Bot", description: "Employee self-service for IT help desk, HR questions, and onboarding", useCases: ["IT troubleshooting guides", "HR policy questions", "Onboarding assistance"], idealFor: "Enterprises, Growing Teams", gradient: "from-indigo-500 to-purple-500" },
  { icon: MessageCircle, name: "WhatsApp & SMS Bot", description: "Conversational AI on WhatsApp Business and SMS for mobile-first support", useCases: ["Order updates via WhatsApp", "SMS appointment confirmations", "Mobile-first customer service"], idealFor: "Delivery Services, Local Businesses", gradient: "from-pink-500 to-rose-500" },
];

const features = [
  { icon: Brain, title: "Natural Language Processing", description: "Understands intent, context, and nuance like humans" },
  { icon: MessageSquare, title: "Multi-Turn Conversations", description: "Maintains context across entire conversation" },
  { icon: Globe, title: "Multi-Language Support", description: "Communicate in 50+ languages automatically" },
  { icon: Sparkles, title: "Sentiment Analysis", description: "Detects frustration and escalates to humans" },
  { icon: Share2, title: "Handoff to Humans", description: "Seamless transfer to live agents when needed" },
  { icon: Database, title: "Knowledge Base Integration", description: "Pulls answers from your docs, FAQs, and help center" },
  { icon: ShoppingCart, title: "Product Catalog Access", description: "Search and recommend from your inventory" },
  { icon: CreditCard, title: "Payment Processing", description: "Handle transactions securely within chat" },
  { icon: Calendar, title: "Appointment Booking", description: "Schedule meetings with calendar integration" },
  { icon: Mail, title: "Email & SMS Capture", description: "Collect contact info for lead nurturing" },
  { icon: BarChart, title: "Analytics Dashboard", description: "Track conversations, satisfaction, and performance" },
  { icon: Lock, title: "Security & Compliance", description: "SOC 2, GDPR, HIPAA-compliant options" },
];

const faqs = [
  { q: "How accurate are AI chatbots?", a: "When properly trained, 85-95% accuracy for questions within their knowledge base. We train chatbots on your FAQs, documentation, and previous conversations. For questions outside their training, they gracefully admit uncertainty and escalate to humans. Accuracy improves over time as the bot learns from real conversations." },
  { q: "Can chatbots sound like our brand?", a: "Absolutely! We customize tone, personality, and language to match your brand. Professional and formal for B2B, friendly and casual for consumer brands, empathetic for healthcare, etc. We provide examples, and you approve the style before deployment." },
  { q: "What happens when the chatbot doesn't know the answer?", a: "Three safety mechanisms: (1) The bot admits 'I'm not sure about that' rather than guessing, (2) It offers to connect the user with a human agent, (3) It logs the question so we can add it to the training data. No hallucinations or made-up answers." },
  { q: "Can we update the chatbot ourselves?", a: "Yes! We provide a simple dashboard where you can update FAQs, add new information, and refine responses. For major changes (new integrations, conversation flows), we handle those as part of ongoing support." },
  { q: "How long does it take to build a chatbot?", a: "Simple FAQ bot: 2-3 weeks. E-commerce bot with product integration: 3-4 weeks. Complex multi-channel bot with CRM: 4-6 weeks. Timeline depends on training data preparation and integration complexity." },
  { q: "Can chatbots handle multiple languages?", a: "Yes! GPT-4 and Claude support 50+ languages. The bot can detect the user's language automatically and respond in that language. This works even if your training data is only in English\u2014the AI translates intelligently." },
  { q: "What channels can chatbots work on?", a: "Website live chat, WhatsApp Business, Facebook Messenger, SMS via Twilio, Slack (internal), Instagram DM, and custom integrations. We deploy to whichever channels your customers prefer." },
  { q: "Do we need technical knowledge to use the chatbot?", a: "No! Once deployed, the chatbot runs automatically. We provide a simple dashboard to view conversations, see analytics, and make updates. No coding required. We train your team on basic management." },
  { q: "Can chatbots process payments?", a: "Yes! We integrate with Stripe, PayPal, or your payment provider. The chatbot can present products, accept orders, and process payments securely\u2014all within the conversation. PCI-compliant." },
  { q: "What about privacy and data security?", a: "Conversations are encrypted. We can deploy on your infrastructure for full data control. GDPR-compliant, and we can make the chatbot HIPAA-compliant for healthcare. User data is never used to train public AI models." },
  { q: "Can chatbots replace our entire support team?", a: "Chatbots typically handle 60-90% of routine inquiries (FAQs, order tracking, product questions), freeing your team to focus on complex issues, complaints, and high-value customers. Best results come from AI + human collaboration, not full replacement." },
  { q: "What are ongoing costs after launch?", a: "AI API costs (£100-500/month depending on volume), hosting (£50/month), and optional maintenance/support (£500/month). For example, a chatbot handling 10,000 conversations/month costs about £300/month total to run." },
];

const caseStudyMetrics = [
  { icon: Clock, label: "Response Time", before: "18 hours", after: "12 seconds", improvement: "99.3% faster" },
  { icon: MessageSquare, label: "Conversations Handled", value: "180/day automated", detail: "90% resolution rate" },
  { icon: DollarSign, label: "Cost Savings", value: "£3,600/month", detail: "Avoided 2 new hires" },
  { icon: Users, label: "Customer Satisfaction", before: "3.8/5", after: "4.6/5", improvement: "+21%" },
  { icon: TrendingUp, label: "Conversion Rate", before: "2.1%", after: "2.9%", improvement: "+38%" },
  { icon: Clock, label: "Support Team Time", value: "15 hours/week saved", detail: "Focus on complex issues" },
];

const aiChatbotsTechTabs = [
  {
    label: "AI Models",
    technologies: [
      { name: "OpenAI", slug: "openai" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "Python", slug: "python" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "LangChain", slug: "langchain" },
      { name: "Node.js", slug: "nodedotjs" },
    ],
  },
  {
    label: "Frameworks",
    technologies: [
      { name: "LangChain", slug: "langchain" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Express.js", slug: "express" },
      { name: "GraphQL", slug: "graphql" },
    ],
  },
  {
    label: "Integrations",
    technologies: [
      { name: "HubSpot", slug: "hubspot" },
      { name: "Shopify", slug: "shopify" },
      { name: "Stripe", slug: "stripe" },
      { name: "Zapier", slug: "zapier" },
      { name: "Slack", slug: "slack" },
      { name: "Twilio", slug: "twilio" },
      { name: "PayPal", slug: "paypal" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    label: "Channels",
    technologies: [
      { name: "Slack", slug: "slack" },
      { name: "Twilio", slug: "twilio" },
      { name: "WhatsApp", slug: "whatsapp" },
      { name: "Facebook", slug: "facebook" },
      { name: "Instagram", slug: "instagram" },
      { name: "Zapier", slug: "zapier" },
      { name: "HubSpot", slug: "hubspot" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    label: "Analytics",
    technologies: [
      { name: "Datadog", slug: "datadog" },
      { name: "Grafana", slug: "grafana" },
      { name: "Sentry", slug: "sentry" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Redis", slug: "redis" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
    ],
  },
];

export default function AIChatbotsPage() {
  return (
    <>
      <SEO
        title="AI Chatbot Development | Custom GPT Chatbots UK"
        description="Build intelligent AI chatbots for your business. Powered by GPT-4, custom-trained on your data. 24/7 customer support automation. Free consultation."
        canonical="/services/ai-services/ai-chatbots"
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "AI Services", href: "/services/ai-services" },
          { label: "AI Chatbots" },
        ]}
      />

      {/* HERO */}
      <section className="py-24" data-testid="section-chatbot-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                className="mb-4 text-white border-0 no-default-hover-elevate no-default-active-elevate"
                style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}
                data-testid="badge-chatbot-dev"
              >
                <MessageSquare className="h-3 w-3 mr-1" />
                AI Chatbot Development
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="heading-chatbot-hero">
                AI Chatbot Development Services
              </h1>

              <p
                className="mt-4 text-xl md:text-2xl font-semibold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #9333EA, #EC4899)" }}
              >
                Intelligent Conversations That Scale Infinitely
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We build custom AI chatbots powered by GPT-4 and Claude that handle customer support, qualify leads, and boost sales\u201424/7. Natural conversations, instant responses, unlimited scale.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "GPT-4 Powered", icon: Sparkles },
                  { label: "24/7 Available", icon: Clock },
                  { label: "Multi-Channel", icon: Globe },
                  { label: "90% Automation", icon: Zap },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1.5 text-sm"
                    data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <pill.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{pill.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { num: "15+", label: "Chatbots Deployed" },
                  { num: "450K+", label: "Chats Handled" },
                  { num: "8 Seconds", label: "Avg Response" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <p
                      className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: "linear-gradient(135deg, #9333EA, #EC4899)" }}
                    >
                      {stat.num}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    className="text-white border-0 h-12 px-8"
                    style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}
                    data-testid="button-build-chatbot"
                  >
                    Build Your Chatbot
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <a href="#demos">
                  <Button variant="outline" className="h-12 px-8" data-testid="button-see-demo">
                    See Live Demo
                  </Button>
                </a>
              </div>

              <p className="mt-6 text-sm text-muted-foreground flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                Powers customer support for 15+ businesses
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <ChatWidgetMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT ARE AI CHATBOTS */}
      <section className="py-20 bg-muted" data-testid="section-what-are-chatbots">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What Are AI Chatbots?</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            AI chatbots are conversational agents powered by large language models like GPT-4 or Claude. They understand natural language, maintain context, and respond intelligently\u2014just like a human support agent, but available 24/7 and handling unlimited conversations simultaneously.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", icon: MessageSquare, title: "User Asks", description: "Customer types question or request in natural language" },
              { num: "2", icon: Brain, title: "AI Understands", description: "GPT-4 analyzes intent, context, and retrieves relevant information" },
              { num: "3", icon: Database, title: "Data Retrieved", description: "Pulls from your FAQs, product catalog, order history, or CRM" },
              { num: "4", icon: Sparkles, title: "Intelligent Response", description: "Generates personalized, accurate answer in conversational tone" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full text-center" data-testid={`step-${step.num}`}>
                  <p
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #9333EA, #EC4899)" }}
                  >
                    {step.num}
                  </p>
                  <step.icon className="h-8 w-8 mx-auto mt-3 mb-3" style={{ color: CHATBOT_COLOR }} />
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHATBOT TYPES */}
      <section className="py-20" data-testid="section-chatbot-types">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">AI Chatbot Solutions We Build</h2>
            <p className="text-muted-foreground mt-2">Custom chatbots for every business need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatbotTypes.map((type, i) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="p-6 h-full hover-elevate" data-testid={`chatbot-type-${i}`}>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${type.gradient}`}
                  >
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mt-4">{type.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{type.description}</p>
                  <div className="mt-4 space-y-1.5">
                    {type.useCases.map((uc) => (
                      <div key={uc} className="flex items-center gap-2 text-xs">
                        <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <span className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground">
                      {type.idealFor}
                    </span>
                  </div>
                  <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: CHATBOT_COLOR }}>
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <CTASection
        variant="gradient"
        title="Ready to Automate Customer Support?"
        description="Let's build an AI chatbot that handles 90% of inquiries 24/7"
        primaryCTA={{ text: "Get Chatbot Quote", link: "/contact" }}
        size="large"
      />

      {/* CONVERSATION DEMOS */}
      <section className="py-20 bg-muted" id="demos" data-testid="section-chatbot-demos">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">See AI Chatbots in Action</h2>
            <p className="text-muted-foreground mt-2">Real conversation examples from our deployed chatbots</p>
          </div>

          <div className="space-y-12">
            <ConversationDemo
              title="E-Commerce Customer Support"
              company="TechGear Store (Electronics)"
              messages={ecommerceMessages}
              metrics={[
                { label: "Response time", value: "8 seconds" },
                { label: "Resolved without human", value: "90%" },
                { label: "Availability", value: "24/7" },
              ]}
            />

            <ConversationDemo
              title="B2B Lead Qualification"
              company="Marketing Agency"
              messages={leadQualMessages}
              metrics={[
                { label: "Lead qualified in", value: "90 seconds" },
                { label: "Meeting booked", value: "Automatically" },
                { label: "Sales team", value: "Notified" },
              ]}
            />

            <ConversationDemo
              title="Fashion E-Commerce"
              company="StyleHub (Online Fashion)"
              messages={fashionMessages}
              metrics={[
                { label: "Avg order value", value: "+47% with AI" },
                { label: "Product discovery", value: "2 min" },
                { label: "Conversion rate", value: "4.2%" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-20" data-testid="section-chatbot-benefits">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose AI Chatbots"
            subtitle="Measurable benefits for your business"
            columns={3}
            accentColor={CHATBOT_COLOR}
            values={[
              { icon: Clock, title: "24/7 Availability", description: "Never miss a customer inquiry\u2014AI responds instantly, any time of day" },
              { icon: DollarSign, title: "70% Cost Reduction", description: "AI chatbots cost 70% less than human support agents" },
              { icon: Zap, title: "Instant Responses", description: "8-second average response time vs 12+ hours for email" },
              { icon: Users, title: "Unlimited Scale", description: "Handle 1,000+ simultaneous conversations without hiring" },
              { icon: TrendingUp, title: "Higher Conversions", description: "Proactive engagement increases conversion rates 30%" },
              { icon: Target, title: "Lead Qualification", description: "Automatically qualify and route hot leads to sales" },
              { icon: Globe, title: "Multi-Channel", description: "Deploy on website, WhatsApp, SMS, Slack, Facebook" },
              { icon: Database, title: "CRM Integration", description: "Sync conversations to HubSpot, Salesforce, Pipedrive" },
              { icon: BarChart, title: "Data & Insights", description: "Analyze conversations to understand customer needs" },
            ]}
          />
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-muted" data-testid="section-chatbot-features">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Advanced Chatbot Features</h2>
            <p className="text-muted-foreground mt-2">Enterprise-grade capabilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Card className="p-4 h-full hover-elevate" data-testid={`feature-${i}`}>
                  <feat.icon className="h-6 w-6" style={{ color: CHATBOT_COLOR }} />
                  <h3 className="font-semibold text-sm mt-2">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feat.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES & INTEGRATIONS */}
      <section className="py-20 bg-muted" data-testid="section-chatbot-technologies">
        <TabbedTechStack
          tabs={aiChatbotsTechTabs}
          title="Technologies We Use"
          subtitle="We use industry-leading technologies to build intelligent chatbot solutions."
        />
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-muted" data-testid="section-chatbot-case-study">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Chatbot Success Story</h2>
            <p className="text-muted-foreground mt-2">Real results from a real business</p>
          </div>

          <Card className="p-8" data-testid="case-study-glowcosmetics">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">E-Commerce - Beauty Products</Badge>
              <span className="text-xl font-bold">GlowCosmetics UK</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">35 employees, £2M annual revenue | AI Customer Support Chatbot</p>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">The Challenge</h3>
              <p className="text-sm text-muted-foreground">
                GlowCosmetics was receiving 200+ customer inquiries daily via email and live chat. Their 3-person support team was overwhelmed, leading to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {["18-24 hour response times", "Customers abandoning carts", "Same questions asked repeatedly", "Support team working evenings"].map((pain) => (
                  <div key={pain} className="flex items-center gap-2 text-sm">
                    <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-3">The Solution</h3>
              <p className="text-sm text-muted-foreground mb-3">We built a GPT-4 powered chatbot trained on:</p>
              <div className="space-y-1.5">
                {["3 years of previous customer emails", "Product catalog (150 SKUs)", "Ingredient information and usage guides", "Shipping and return policies", "Order tracking integration with Shopify"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 mb-3">The chatbot handles:</p>
              <div className="space-y-1.5">
                {["Product recommendations based on skin type", "Ingredient questions and allergy concerns", "Order status and tracking", "Returns and exchanges", "Escalation to humans for complex cases"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6">The Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {caseStudyMetrics.map((m) => (
                  <div key={m.label} className="bg-muted p-4 rounded-xl" data-testid={`metric-${m.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <m.icon className="h-5 w-5 mb-2" style={{ color: CHATBOT_COLOR }} />
                    <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                    {"before" in m && m.before ? (
                      <>
                        <p className="text-xs line-through text-muted-foreground">{m.before}</p>
                        <p
                          className="text-xl font-bold bg-clip-text text-transparent"
                          style={{ backgroundImage: "linear-gradient(135deg, #9333EA, #EC4899)" }}
                        >
                          {m.after}
                        </p>
                        {m.improvement && (
                          <Badge variant="secondary" className="text-[10px] mt-1 no-default-hover-elevate no-default-active-elevate bg-green-500/10 text-green-600">
                            {m.improvement}
                          </Badge>
                        )}
                      </>
                    ) : (
                      <>
                        <p
                          className="text-xl font-bold bg-clip-text text-transparent"
                          style={{ backgroundImage: "linear-gradient(135deg, #9333EA, #EC4899)" }}
                        >
                          {"value" in m ? m.value : ""}
                        </p>
                        {"detail" in m && <p className="text-xs text-muted-foreground mt-1">{m.detail}</p>}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pl-6" style={{ borderLeft: `4px solid ${CHATBOT_COLOR}` }}>
              <p className="italic text-muted-foreground">
                "The AI chatbot has been transformative. Our customers get instant answers day or night, and our team can focus on the nuanced skincare consultations that really drive sales. We saw ROI within the first month."
              </p>
              <p className="mt-2 font-medium text-sm">\u2014 Sarah Mitchell, Customer Experience Manager, GlowCosmetics</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["GPT-4", "Shopify API", "WhatsApp Business", "HubSpot CRM"].map((tech) => (
                <Badge key={tech} variant="secondary" className="no-default-hover-elevate no-default-active-elevate">{tech}</Badge>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Development: 3 weeks</span>
              <span>Training: 1 week</span>
              <span>Deployed: January 2024</span>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA 2 */}
      <CTASection
        variant="bordered"
        title="Want Results Like GlowCosmetics?"
        description="See how AI chatbots can save 15+ hours per week and boost conversions"
        primaryCTA={{ text: "Build My Chatbot", link: "/contact" }}
        secondaryCTA={{ text: "See Live Demo", link: "#demos" }}
        size="medium"
      />

      {/* PRICING */}
      <section className="py-20" data-testid="section-chatbot-pricing">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">AI Chatbot Pricing</h2>
            <p className="text-muted-foreground mt-2">Custom solutions, transparent pricing</p>
          </div>

          <Card className="p-8" data-testid="pricing-card">
            <p className="text-muted-foreground">
              Chatbot pricing depends on complexity, integrations, and conversation volume. We provide transparent quotes after understanding your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { icon: MessageSquare, title: "Conversation Volume", description: "Expected monthly conversations affects API costs" },
                { icon: Brain, title: "AI Model", description: "GPT-4 (best quality) vs GPT-3.5 (more economical)" },
                { icon: Plug, title: "Integrations", description: "CRM, e-commerce, calendar, support tools" },
                { icon: Database, title: "Training Data", description: "Volume of FAQs, docs, previous conversations" },
              ].map((factor) => (
                <div key={factor.title} className="flex gap-3">
                  <factor.icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: CHATBOT_COLOR }} />
                  <div>
                    <h4 className="font-semibold text-sm">{factor.title}</h4>
                    <p className="text-xs text-muted-foreground">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-muted p-6 rounded-xl">
              <h4 className="font-semibold mb-3">Development Costs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between flex-wrap gap-2">
                  <span>Simple FAQ chatbot</span>
                  <span className="font-medium">£5,000 - £8,000</span>
                </div>
                <div className="flex justify-between flex-wrap gap-2">
                  <span>E-commerce chatbot</span>
                  <span className="font-medium">£10,000 - £15,000</span>
                </div>
                <div className="flex justify-between flex-wrap gap-2">
                  <span>Complex multi-channel bot</span>
                  <span className="font-medium">£15,000 - £25,000</span>
                </div>
              </div>

              <h4 className="font-semibold mt-6 mb-3">Monthly Running Costs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between flex-wrap gap-2">
                  <span>AI API costs (based on volume)</span>
                  <span className="font-medium">£100 - £500/month</span>
                </div>
                <div className="flex justify-between flex-wrap gap-2">
                  <span>Hosting & maintenance</span>
                  <span className="font-medium">£150/month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Example: 10,000 conversations/month = approx. £200 in API costs
                </p>
              </div>
            </div>

            <div className="mt-6 pl-4" style={{ borderLeft: "4px solid #22C55E" }}>
              <p className="text-sm font-medium">Average client saves £3,500/month in support costs</p>
              <p className="text-sm text-muted-foreground">Typical ROI: 3-6 months</p>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact">
                <Button
                  className="text-white border-0 h-12 px-8"
                  style={{ background: "linear-gradient(135deg, #9333EA, #EC4899)" }}
                  data-testid="button-get-quote"
                >
                  Get Custom Quote
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground mt-3">Free consultation \u2022 No obligation quote in 48 hours</p>
            </div>
          </Card>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 bg-muted" data-testid="section-chatbot-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Chatbot Development Process"
            subtitle="From concept to deployed chatbot"
            accentColor={CHATBOT_COLOR}
            steps={[
              {
                icon: Brain,
                title: "Discovery & Training Data",
                points: [
                  "Use case workshop to define conversation flows and AI model selection",
                  "Gather FAQs, documentation, and knowledge base content for training",
                  "Map required integrations (CRM, APIs, databases) and define scope",
                ],
              },
              {
                icon: Code2,
                title: "Build & Train",
                points: [
                  "Develop chatbot with custom conversation flows and personality",
                  "Train AI on your FAQs, docs, and product data for accurate responses",
                  "Set up CRM, payment, and third-party integrations with initial testing",
                ],
              },
              {
                icon: Target,
                title: "Testing & Refinement",
                points: [
                  "Run 50+ test conversations covering edge cases and complex queries",
                  "Review and optimise response quality, tone, and personality tuning",
                  "Performance optimisation for speed and accuracy benchmarks",
                ],
              },
              {
                icon: Zap,
                title: "Deployment & Training",
                points: [
                  "Deploy to website, WhatsApp, and all configured channels",
                  "Team training on monitoring dashboard and analytics setup",
                  "Full documentation handover with 30-day post-launch support",
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-chatbot-faqs">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">AI Chatbot FAQs</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left" data-testid={`chatbot-faq-trigger-${i}`}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA 3 */}
      <CTASection
        variant="gradient"
        title="Let's Build Your AI Chatbot"
        description="Book a free consultation and get a custom proposal for your business"
        primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo
        size="large"
      />
    </>
  );
}
