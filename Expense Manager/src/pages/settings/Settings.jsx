import "./Settings.css";

function Settings() {
    return (
        <main className="utility-page">
            <div className="utility-heading">
                <h1>Settings</h1>
                <p>Manage your account preferences and workspace defaults.</p>
            </div>
            <section className="settings-list">
                <div className="settings-row"><div><strong>Currency</strong><span>Default currency used for expense totals</span></div><b>INR (₹)</b></div>
                <div className="settings-row"><div><strong>Weekly summary</strong><span>Receive a weekly spending overview</span></div><b>Enabled</b></div>
                <div className="settings-row"><div><strong>Theme</strong><span>Choose the visual appearance of your workspace</span></div><b>Light</b></div>
                <div className="settings-row"><div><strong>Data storage</strong><span>Your account data is stored locally on this device</span></div><b>Local</b></div>
            </section>
        </main>
    );
}

export default Settings;
