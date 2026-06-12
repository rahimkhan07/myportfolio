import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { BsGithub, BsStar, BsCodeSlash, BsEye } from "react-icons/bs";
import { AiOutlineFork } from "react-icons/ai";

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const USERNAME = "rahimkhan07";

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6&type=public`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ paddingBottom: "20px" }}>
      <h1 className="project-heading">
        My GitHub <strong className="purple">Repositories</strong>
      </h1>
      <p style={{ color: "#65799b" }}>
        A quick look at my latest public repos on GitHub.
      </p>

      {loading && (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <Spinner animation="border" style={{ color: "#65799b" }} />
        </div>
      )}

      {error && (
        <p style={{ color: "#65799b", textAlign: "center" }}>
          Could not load repositories. Please visit{" "}
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#65799b" }}
          >
            github.com/{USERNAME}
          </a>
        </p>
      )}

      {!loading && !error && (
        <Row style={{ justifyContent: "center", gap: "0" }}>
          {repos.map((repo) => (
            <Col md={4} key={repo.id} className="project-card">
              <Card className="repo-card-view">
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <Card.Title style={{ fontSize: "1em", fontWeight: 600 }}>
                      {repo.name}
                    </Card.Title>
                    <Card.Text
                      style={{
                        textAlign: "justify",
                        fontSize: "0.88em",
                        minHeight: "48px",
                      }}
                    >
                      {repo.description || "No description provided."}
                    </Card.Text>
                  </div>

                  <div>
                    {/* Language + stats row */}
                    <div
                      style={{
                        display: "flex",
                        gap: "14px",
                        fontSize: "0.82em",
                        color: "#65799b",
                        marginBottom: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      {repo.language && (
                        <span>
                          <BsCodeSlash /> {repo.language}
                        </span>
                      )}
                      <span>
                        <BsStar /> {repo.stargazers_count}
                      </span>
                      <span>
                        <AiOutlineFork /> {repo.forks_count}
                      </span>
                      <span>
                        <BsEye /> {repo.watchers_count}
                      </span>
                    </div>

                    <Button
                      variant="primary"
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                    >
                      <BsGithub /> &nbsp; View Repo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Link to full GitHub profile */}
      {!loading && !error && (
        <div style={{ textAlign: "center", paddingTop: "10px" }}>
          <Button
            variant="primary"
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub /> &nbsp; View All on GitHub
          </Button>
        </div>
      )}
    </div>
  );
}

export default GitHubRepos;
