function ProfileCard({ name, role }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: 10 }}>
            <h3>{name}</h3>
            <p>Role: {role}</p>
        </div>
    );
}

export default function ComponentsProps() {
    return (
        <div>
            <h2>Components & Props</h2>
            <ProfileCard name="Naresh" role="Student" />
            <ProfileCard name="Ravi" role="Developer" />
        </div>
    );
}