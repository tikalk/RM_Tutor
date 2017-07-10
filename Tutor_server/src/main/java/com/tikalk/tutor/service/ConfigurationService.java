package com.tikalk.tutor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.StringReader;
import java.util.Properties;

/**
 * Created by yaniv on 10/07/2017.
 */
@Service
public class ConfigurationService {
    @Autowired
    private RestClient restClient;
    @Value("config.server.url")
    private String configServerUrl;
    private Properties configProperties = new Properties();

    @PostConstruct
    private void init() throws IOException {
        String configUri = "/config-tutor/development/master";
        String result = restClient.invokeGetApi(configServerUrl + configUri);
        if (result != null) {
            configProperties.load(new StringReader(result));
        }
    }

    public String getConfigProperty(String configKey) {
        return configProperties.getProperty(configKey);
    }
}
