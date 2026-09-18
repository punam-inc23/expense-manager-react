import "./Settings.css";
import { useState } from "react";
import { getUser } from "../../utils/userStorage";

function Settings() {
    const user = getUser();

    const [currency, setCurrency] = useState("INR");
    const [theme, setTheme] = useState("Light");
    const [weeklySummary, setWeeklySummary] = useState(true);
    const [transactionAlerts, setTransactionAlerts] = useState(true);

    const displayName = user?.username || "Personal account";
    const initials = displayName.slice(0, 1).toUpperCase();

    return (
        <main className="utility-page">

            {/* Page Heading */}
            <div className="utility-heading">
                <div className="utility-heading-row">
                    <div>
                        <span className="utility-eyebrow">
                            Workspace controls
                        </span>

                        <h1>Settings</h1>

                        <p>
                            Shape your expense manager around the way you work
                            and review money.
                        </p>
                    </div>
                </div>
            </div>

            {/* Profile */}
            <section className="settings-profile">
                <div className="profile-initials">
                    {initials}
                </div>

                <div>
                    <span className="profile-label">
                        Signed in as
                    </span>

                    <strong>{displayName}</strong>

                    <span>
                        Your preferences are saved for this workspace.
                    </span>
                </div>

                <span className="profile-status">
                    <i></i>
                    Active
                </span>
            </section>

            {/* Settings Cards */}
            <div className="settings-layout">

                {/* Preferences */}
                <section className="settings-list settings-card">
                    <div className="settings-section-heading">
                        <div>
                            <h2>Preferences</h2>
                            <span>
                                Defaults used across your dashboard
                            </span>
                        </div>

                        <span className="section-number">
                            01
                        </span>
                    </div>

                    <label className="settings-row">
                        <span>
                            <strong>Currency</strong>

                            <small>
                                Default currency used for expense totals
                            </small>
                        </span>

                        <select
                            value={currency}
                            onChange={(event) =>
                                setCurrency(event.target.value)
                            }
                        >
                            <option value="INR">INR (₹)</option>
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                        </select>
                    </label>

                    <label className="settings-row">
                        <span>
                            <strong>Theme</strong>

                            <small>
                                Choose the visual appearance of your workspace
                            </small>
                        </span>

                        <select
                            value={theme}
                            onChange={(event) =>
                                setTheme(event.target.value)
                            }
                        >
                            <option>Light</option>
                            <option>System default</option>
                        </select>
                    </label>
                </section>

                {/* Notifications */}
                <section className="settings-list settings-card">
                    <div className="settings-section-heading">
                        <div>
                            <h2>Notifications</h2>

                            <span>
                                Choose what deserves your attention
                            </span>
                        </div>

                        <span className="section-number">
                            02
                        </span>
                    </div>

                    <div className="settings-row">
                        <span>
                            <strong>Weekly summary</strong>

                            <small>
                                Receive a weekly spending overview
                            </small>
                        </span>

                        <button
                            className={`toggle ${weeklySummary ? "on" : ""
                                }`}
                            type="button"
                            aria-label="Toggle weekly summary"
                            aria-pressed={weeklySummary}
                            onClick={() =>
                                setWeeklySummary(!weeklySummary)
                            }
                        >
                            <i></i>
                        </button>
                    </div>

                    <div className="settings-row">
                        <span>
                            <strong>Transaction alerts</strong>

                            <small>
                                Show an update when a transaction is recorded
                            </small>
                        </span>

                        <button
                            className={`toggle ${transactionAlerts ? "on" : ""
                                }`}
                            type="button"
                            aria-label="Toggle transaction alerts"
                            aria-pressed={transactionAlerts}
                            onClick={() =>
                                setTransactionAlerts(!transactionAlerts)
                            }
                        >
                            <i></i>
                        </button>
                    </div>
                </section>

                {/* Data & Privacy */}
                <section className="settings-list settings-card settings-storage-card">
                    <div className="settings-section-heading">
                        <div>
                            <h2>Data & Privacy</h2>

                            <span>
                                Your account data stays on this device
                            </span>
                        </div>

                        <span className="section-number">
                            03
                        </span>
                    </div>

                    <div className="storage-status">
                        <span className="storage-icon">
                            DB
                        </span>

                        <div>
                            <strong>Local storage</strong>

                            <small>
                                Categories and expenses are scoped to your
                                account.
                            </small>
                        </div>

                        <span className="storage-check">
                            Secure
                        </span>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Settings;